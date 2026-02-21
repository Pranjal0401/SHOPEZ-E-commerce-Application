import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

// Connect to MongoDB
connectDB(process.env.MONGO_URI);

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("ShopEZ Server is Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});