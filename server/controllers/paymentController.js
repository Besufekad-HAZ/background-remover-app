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
    const callback_url = `${process.env.BACKEND_URL}/api/payment/verify`;

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
    await userModel.findOneAndUpdate(
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

    // Verify payment with Chapa
    const response = await axios.get(
      `https://api.chapa.co/v1/transaction/verify/${tx_ref}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );

    if (
      response.data.status === "success" &&
      response.data.data.status === "success"
    ) {
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

      // Update user's credit balance and remove the pending payment
      await userModel.findByIdAndUpdate(user._id, {
        $inc: { creditBalance: payment.credits },
        $pull: { pendingPayments: { tx_ref } },
      });

      res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
    } else {
      res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
    }
  } catch (error) {
    console.error(
      "Payment verification error:",
      error.response?.data || error.message
    );
    res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
  }
};

export { initializePayment, verifyPayment };
