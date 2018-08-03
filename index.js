const express = require("express");
const db = require("./data/db");
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send("working...");
});

const port = 8000;
server.listen(port, function() {
  console.log(`Web API listening on http://localhost:${port}`);
});
