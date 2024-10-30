import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },
    
});

export default mongoose.model("User", userSchema);
