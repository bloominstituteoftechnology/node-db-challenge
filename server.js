const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./resources/projects/router");
const TaskRouter = require("./resources/tasks/router");
const ResourceRouter = require("./resources/resources/router");

const server = express();
server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/tasks", TaskRouter);
server.use("/api/resources", ResourceRouter);

server.get("/", (req, res) =>
  res.send("<h1>Welcome to Lambda's Node DB Sprint!</h1>")
);

module.exports = server;
