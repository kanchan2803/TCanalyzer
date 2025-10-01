import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String }, // only for manual signup (hashed)
  googleId: { type: String }, // only for Google accounts
  leetcodeId: { type: String },
  codeforcesId: { type: String },
}, { timestamps: true });

export default mongoose.model("User", userSchema);
