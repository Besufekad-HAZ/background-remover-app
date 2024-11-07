// routes/paymentRoutes.js
import express from "express";
import {
  initializePayment,
  verifyPayment,
} from "../controllers/paymentController.js";
import authUser from "../middlewares/auth.js";

const paymentRouter = express.Router();

paymentRouter.post("/initialize", authUser, initializePayment);
paymentRouter.get("/verify", verifyPayment);

export default paymentRouter;
