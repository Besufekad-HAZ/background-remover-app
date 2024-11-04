import axois from "axios";
import fs from "fs";
import FormData from "form-data";
import userModel from "../models/User.js";

// Controller function to remove background from image
const removeBackground = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}
