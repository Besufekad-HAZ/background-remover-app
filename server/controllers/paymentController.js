// paymentController.js
import axios from "axios";
import userModel from "../models/User.js";

const initializePayment = async (req, res) => {
  try {
    const { amount, email, first_name, last_name, clerkId, credits } = req.body;

    if (
      !amount ||
      !email ||
      !first_name ||
      !last_name ||
      !clerkId ||
      !credits
    ) {
      return res
        .status(400)
        .json({ success: false, message: "Missing required fields" });
    }

    const tx_ref = `tx-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;
    const callback_url = `${process.env.BACKEND_URL}/api/payment/verify?tx_ref=${tx_ref}`;

    // Initialize payment with Chapa
    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency: "ETB",
        email,
        first_name,
        last_name,
        tx_ref,
        callback_url,
        return_url: `${process.env.FRONTEND_URL}/payment/success`,
        customization: {
          title: "Credit Purchase",
          description: `Purchase of ${credits} credits`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Save the payment intent to the user's pendingPayments
    const updatedUser = await userModel.findOneAndUpdate(
      { clerkId },
      {
        $push: {
          pendingPayments: {
            tx_ref,
            amount,
            credits,
            status: "pending",
          },
        },
      },
      { new: true, upsert: true }
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      checkout_url: response.data.data.checkout_url,
    });
  } catch (error) {
    console.error(
      "Payment initialization error:",
      error.response?.data || error.message
    );
    res.status(500).json({
      success: false,
      message: "Payment initialization failed",
    });
  }
};

const verifyPayment = async (req, res) => {
  try {
    const { tx_ref } = req.query;

    if (!tx_ref) {
      return res
        .status(400)
        .json({ success: false, message: "Transaction reference is missing" });
    }

    // Verify payment with Chapa
    const response = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );

    const chapaStatus = response.data.status;
    const chapaData = response.data.data;

    if (chapaStatus === "success" && chapaData.status === "success") {
      // Payment was successful
      const user = await userModel.findOne({
        "pendingPayments.tx_ref": tx_ref,
      });

      if (!user) {
        return res
          .status(404)
          .json({ success: false, message: "User not found" });
      }

      const payment = user.pendingPayments.find((p) => p.tx_ref === tx_ref);

      if (!payment) {
        return res
          .status(404)
          .json({ success: false, message: "Payment not found" });
      }

      // Check if the amounts match
      if (parseFloat(chapaData.amount) !== payment.amount) {
        return res
          .status(400)
          .json({ success: false, message: "Invalid payment amount" });
      }

      // Update user's credit balance and mark payment as successful
      await userModel.updateOne(
        { _id: user._id, "pendingPayments.tx_ref": tx_ref },
        {
          $inc: { creditBalance: payment.credits },
          $set: { "pendingPayments.$.status": "success" },
        }
      );

      res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
    } else {
      // Payment failed or was canceled
      await userModel.updateOne(
        { "pendingPayments.tx_ref": tx_ref },
        { $set: { "pendingPayments.$.status": "failed" } }
      );

      res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
    }
  } catch (error) {
    console.error(
      "Payment verification error:",
      error.response?.data || error.message
    );

    // Update payment status to failed in case of error
    const { tx_ref } = req.query;
    if (tx_ref) {
      await userModel.updateOne(
        { "pendingPayments.tx_ref": tx_ref },
        { $set: { "pendingPayments.$.status": "failed" } }
      );
    }

    res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
  }
};

export { initializePayment, verifyPayment };
