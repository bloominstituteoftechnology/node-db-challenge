const express = require("express");
const helmet = require("helmet");

const db = require("./data/db-config");

const server = express();

server.get("/", (req, res) => {
  res.json({ message: "server is up and running" });
});

server.use(helmet());
server.use(express.json());

module.exports = server;
