import axois from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/User.js";

// Controller function to remove background from image
const removeBackground = async (req, res) => {
  try {
    const { clerkId } = req.body;

    const user = await userModel.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "Insufficient credits",
        creditBalance: user.creditBalance,
      });
    }

    if (user.creditBalance >= 45) {
      return res.json({
        success: false,
        message: "Maximum credit limit reached",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file.path;

    // Reading the image file
    const imageFile = fs.createReadStream(imagePath);

    const formData = new FormData();
    formData.append("image_file", imageFile);

    // Use Axios to make the API call
    const { data } = await axois.post(
      "https://clipdrop-api.co/remove-background/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64"); // Convert to base64 string

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    }); // Update user's credit balance

    res.json({
      success: true,
      resultImage,
      creditBalance: user.creditBalance - 1,
      message: "Background removed successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

export { removeBackground };
