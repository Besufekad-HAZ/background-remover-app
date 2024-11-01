import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Razorpay from 'razorpay';
import connectDB from './configs/mongodb.js';
import userRouter from './routes/userRoutes.js';


// App config
const PORT = process.env.PORT || 5000;
const app = express();
await connectDB ();

// Initialize Middlewares
app.use(express.json());
app.use(cors());

// API routes
app.get('/', (req, res) => {
    res.status(200).send('API is running');
})

app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
