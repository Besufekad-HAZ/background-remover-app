import axois from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/User.js";

// Controller function to remove background from image
const removeBackground = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const user = await userModel.findById(clerkId);

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance <= 0) {
      return res.json({ success: false, message: "Insufficient credits" });
    }
    
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBackground };
