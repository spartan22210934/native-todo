// server.js

import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.route.js"; // match the variable name
dotenv.config();
const app = express();

// Connect MongoDB
connectDB();

app.use(express.json());

// Example route
app.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "API is running...",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
});
app.use("/api", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
