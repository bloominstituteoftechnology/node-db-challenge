const express = require("express");
const configMiddleware = require("./config/middleware");
const helper = require("./data/helper");

// Create server
const server = express();
const PORT = 3000;

// Middleware
configMiddleware(server);

// Start server
let date = Date();

server.get("/", (req, res) => {
  res.send(" ✅ Getting Things Done™️ ✅ ");
});

server.listen(PORT, () => {
  console.log(`\n===== API Listening on http://localhost:${PORT} =====\n`);
  console.log(`===== Updated on ${date} =====\n`);
});
