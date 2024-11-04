import express from "express";
import { removeBackground } from "../controllers/imageController.js";
import { upload } from "../middlewares/multer.js";
import authUser from "../middlewares/authUser.js";

const imageRouter = express.Router();

imageRouter.post(
  "/remove-bg",
  upload.single("image"),
  authUser,
  removeBackground
);

export default imageRouter;

