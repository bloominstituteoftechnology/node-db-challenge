const express = require("express");
const helmet = require("helmet");
const projectRouter = require("./projects/projects-router");
const resourceRouter = require("./resources/resource-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/projects", projectRouter);
server.use("/resources", resourceRouter);

module.exports = server;
