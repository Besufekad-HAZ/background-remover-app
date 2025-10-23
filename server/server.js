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

const rawOrigins = [
  process.env.FRONTEND_URL,
  process.env.FRONTEND_URL_SECONDARY,
  process.env.FRONTEND_URLS,
  "http://localhost:5173",
  "https://localhost:5173",
];

const allowedOrigins = Array.from(
  new Set(
    rawOrigins
      .filter(Boolean)
      .flatMap((value) => value.split(","))
      .map((origin) => origin.trim())
      .filter(Boolean)
  )
);

const corsOptions = {
  credentials: true,
  origin(origin, callback) {
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    callback(new Error(`Origin ${origin} not allowed by CORS configuration.`));
  },
};

app.use(cors(corsOptions));

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
