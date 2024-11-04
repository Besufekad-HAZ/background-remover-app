import axois from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/User.js";

// Controller function to remove background from image
const removeBackground = async (req, res) => {
    try {
        const { image } = req.body;
        const formData = new FormData();
        formData.append("image", fs.createReadStream(image));
        formData.append("size", "auto");
        formData.append("format", "png");
        formData.append("crop", "true");
        formData.append("type", "auto");
        formData.append("format", "png");
        formData.append("crop", "true");
        formData.append("type", "auto");
        formData.append("format", "png");
        formData.append("crop", "true");
        formData.append("type", "auto");
        formData.append("format", "png");
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
