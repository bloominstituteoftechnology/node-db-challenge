const express = require("express");

const ProjectRouter = require("./data/projects/project-router");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

server.use("/api/projects", ProjectRouter);

module.exports = server;
