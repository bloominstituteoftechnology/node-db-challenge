const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects_/projects-router");
const ResourceRouter = require("./resources_/resources-router");

const server = express();

//initial GET
server.get("/", (req, res) => {
  res.json({ message: "server is up and running" });
});

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);

module.exports = server;
