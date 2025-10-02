import mongoose from "mongoose";

const mongo_url = process.env.MONGO_DB_URI;

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Exit the application if the connection fails
  }
};

export default connectDB;