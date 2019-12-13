const express = require("express");

const ProjectRouter = require("./projects/project-router.js");
const ResourceRouter = require("./Resources/resources-router");
const TaskRouter = require("./Tasks/tasks-router");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/tasks", TaskRouter);

module.exports = server;
