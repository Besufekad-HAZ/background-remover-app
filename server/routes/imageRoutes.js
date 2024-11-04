import express from "express";
import { removeBackground } from "../controllers/imageController.js";
import { upload } from "../middlewares/multer.js";
import authUser from "../middlewares/authUser.js";

const router = express.Router();
