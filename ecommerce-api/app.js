const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Test log
console.log("📦 Starting server...");

// Routes (even if not created yet, we can comment them out)
try {
  app.use("/api/auth", require("./routes/authRoutes"));
  app.use("/api/products", require("./routes/productRoutes"));
  app.use("/api/cart", require("./routes/cartRoutes"));
  app.use("/api/orders", require("./routes/orderRoutes"));
} catch (error) {
  console.log("⚠️ Route loading error:", error.message);
}

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`🚀 Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));
