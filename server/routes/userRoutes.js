import express from "express";
import { clerkWebhooks } from "../controllers/userControllers.js";
import { AuthenticationApiRequestFactory } from "svix/dist/openapi/apis/AuthenticationApi.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post("/webhooks", clerkWebhooks);
userRouter.get("/credits", authUser, userCredits);

export default userRouter;
