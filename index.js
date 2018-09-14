const express = require("express");

const server = express();

const configMiddleware = require('./middleware/middleware.js');
configMiddleware(server);

// server sanity check
server.get("/", (req, res) => {
  res.send("API Running...");
});

// Port setup
const port = 3000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
