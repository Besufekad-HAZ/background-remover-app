import { Webhook } from "svix";
import userModel from "../models/User.js";

// API Controller Function to Manage Clerk User with database
// http://localhost:5000/api/user/webhooks
const clerkWebhooks = async (req, res) => {
  try {
    // Create a Svix instance with clerk webhook secret
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(JSON.stringify(req.body), {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          clerkId: data.id,
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.create(userData);
        res.json({ success: true, message: "User created successfully" });
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          firstName: data.first_name,
          lastName: data.last_name,
          photo: data.image_url,
        };
        await userModel.findOneAndUpdate({ clerkId: data.id }, userData);
        res.json({ success: true, message: "User updated successfully" });
        break;
      }
      case "user.deleted": {
        await userModel.findOneAndDelete({ clerkId: data.id });
        res.json({ success: true, message: "User deleted successfully" });
        break;
      }
      default: {
        console.log("Webhook event not found");
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API Controller Function to get user available credits data
const userCredits = async (req, res) => {
  try {
    const { clerkId } = req.body;
    const userData = await userModel.findOne({ clerkId });

    res.json({ success: true, credits: userData.creditBalance });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Create a Controller function that would initizalize the Razorpay payment gateway
const razorpayInit = async (req, res) => {
  try {
    const { clerkId, amount } = req.body;
    const userData = await userModel.findOne({ clerkId });
    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }
    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `${Date.now()}`,
    };
    const order = await instance.orders.create(options);
    res.json({ success: true, order });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// Create a Controller function that would handle the payment success and update the user credits

export { clerkWebhooks, userCredits };
