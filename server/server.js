// server.js
import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";
import paymentRouter from "./routes/paymentRoutes.js";

// App Config
const PORT = process.env.PORT || 5000;
const app = express();
await connectDB();

// Initialize Middlewares
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("API is running");
});

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.use("/api/payment", paymentRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
