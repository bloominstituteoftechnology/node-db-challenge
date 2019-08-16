const express = require("express");
const ProjectRouter = require("./project-router");
const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.send("Hello from /");
});

module.exports = server;
