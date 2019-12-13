const express = require("express"),
    helmet = require("helmet"),
    ProjectRouter = require("./projects/project-router"),
    server = express();

server.use(helmet())
server.use(express.json())
server.use("/api/projects", ProjectRouter);

module.exports = server;