const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

// API Endpoint
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from the backend!",
    timestamp: new Date().toISOString(),
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
