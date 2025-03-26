const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const mailRoutes = require("./routes/mailRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Set allowed frontend URLs
const BASE_URL = "https://nayan-studio.onrender.com";

// Middleware
app.use(express.json());
app.use(cors({
  origin: [BASE_URL, "http://localhost:3000"], // Allow both Render & local development
  methods: ["GET", "POST"],
  credentials: true
}));

// API Routes
app.use("/api/inquiry", mailRoutes);
app.use("/api/posts", postRoutes);

// Serve React frontend (Fixes "Not Found" issue on reload)
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
