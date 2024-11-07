// models/User.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  tx_ref: String,
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  status: String,
  date: { type: Date, default: Date.now },
  payment: { type: Boolean, default: false },
});

const userSchema = new mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  photo: String,
  firstName: String,
  lastName: String,
  creditBalance: {
    type: Number,
    default: 5,
  },
  pendingPayments: [paymentSchema],
});

const userModel = mongoose.model.user || mongoose.model("User", userSchema);

export default userModel;
