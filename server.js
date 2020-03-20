const express = require("express");

const ProjectRouter = require("./projects/projectRouter.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);

server.get("/", (req, res) => {
  res.send("<h3>Data Persistence Sprint Challenge!</h3>");
});

module.exports = server;
