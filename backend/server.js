const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");
const mailRoutes = require("./routes/mailRoutes");
const postRoutes = require("./routes/postRoutes");

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  // Initialize Socket.IO
  cors: {
    origin: ["http://localhost:3001", "https://nayan-studio.onrender.com"], // Allow both Render & local development
    methods: ["GET", "POST"],
    credentials: true,
  },
});
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3001", "https://nayan-studio.onrender.com"], // Allow both Render & local development
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// API Routes
app.use("/api/inquiry", mailRoutes);
app.use("/api/posts", postRoutes);

// Serve React frontend (Fixes "Not Found" issue on reload)
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

let likeCounts = {}; // Store like counts

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

app.post("/api/posts/like", (req, res) => {
  const { heading, action, likeFrom } = req.body;

  if (!likeCounts[heading]) {
    likeCounts[heading] = 0;
  }

  if (action === "like") {
    likeCounts[heading]++;
    io.emit("likeUpdated", { heading, likeCount: likeCounts[heading] }); // Emit update
  } else if (action === "fetch") {
    // Only send the like count without modifying it
  }

  res.json({ likeCount: likeCounts[heading] });
});

// Make io accessible in routes
app.set("io", io);

// Start the server
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
