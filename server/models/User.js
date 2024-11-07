// models/User.js
import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  tx_ref: String,
  amount: Number,
  credits: Number,
  status: String,
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

const userModel = mongoose.model("User", userSchema);

export default userModel;
