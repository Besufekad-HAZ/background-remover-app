import mongoose from "mongoose";

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
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  creditBalance: {
    type: Number,
    default: 5,
  },
  pendingPayments: [
    {
      tx_ref: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
      credits: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        default: "pending",
      },
    },
  ],
});

const userModel = mongoose.model.user || mongoose.model("User", userSchema);

export default userModel;
