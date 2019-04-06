    
const express = require("express");
const helmet = require("helmet");
const projectsRouter = require("../control/projectsrouter.js");
const actionsRouter = require("../control/actionsrouter.js");
const server = express();

server.use(helmet());
server.use(express.json());
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

module.exports = server;