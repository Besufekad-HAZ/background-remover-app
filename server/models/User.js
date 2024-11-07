import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  tx_ref: { type: String, required: true },
  amount: { type: Number, required: true },
  credits: { type: Number, required: true },
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now },
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
