const express = require("express");
const middlewareConfig = require("../middleware/middlewareConfig");
const server = express();

const projectsRoutes = require("../data/projects/projectsRoutes");
const actionsRoutes = require("../data/actions/actionsRoutes");

middlewareConfig(server);

server.use("/projects", projectsRoutes);
server.use("/actions", actionsRoutes);

module.exports = server;
