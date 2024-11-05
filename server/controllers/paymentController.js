import axios from "axios";
import userModel from "../models/User.js";

const initializePayment = async (req, res) => {
  try {
    const { amount, email, first_name, last_name, clerkId, credits } = req.body;

    const tx_ref = `tx-${Date.now()}-${Math.floor(Math.random() * 1000000)}`;

    const response = await axios.post(
      "https://api.chapa.co/v1/transaction/initialize",
      {
        amount,
        currency: "ETB",
        email,
        first_name,
        last_name,
        tx_ref,
        callback_url: `${process.env.BACKEND_URL}/api/payment/verify`,
        return_url: `${process.env.FRONTEND_URL}/payment/success`,
        customization: {
          title: "Credit Purchase",
          description: `Purchase of ${credits} credits`,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
        },
      }
    );

    // Store payment intent in database
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
      }
    );

    res.json({
      success: true,
      checkout_url: response.data.data.checkout_url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message,
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

    if (response.data.status === "success") {
      // Find user with pending payment
      const user = await userModel.findOne({
        "pendingPayments.tx_ref": tx_ref,
      });

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "Payment not found",
        });
      }

      const payment = user.pendingPayments.find((p) => p.tx_ref === tx_ref);

      // Update user credits
      await userModel.findByIdAndUpdate(user._id, {
        $inc: { creditBalance: payment.credits },
        $pull: { pendingPayments: { tx_ref } },
      });

      res.redirect(`${process.env.FRONTEND_URL}/payment/success`);
    } else {
      res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
    }
  } catch (error) {
    console.error(error);
    res.redirect(`${process.env.FRONTEND_URL}/payment/failed`);
  }
};

export { initializePayment, verifyPayment };
