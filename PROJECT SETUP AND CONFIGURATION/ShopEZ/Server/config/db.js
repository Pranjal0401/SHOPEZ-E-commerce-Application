import mongoose from "mongoose";

const connectDB = async (mongoUri) => {
  try {
    if (!mongoUri) {
      throw new Error("MONGO_URI is missing. Check .env");
    }

    const conn = await mongoose.connect(mongoUri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;