const express = require("express");
const server = express();
const configureMiddleware = require("./middleware/middleware.js");
const port = 7250;

configureMiddleware(server);
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
