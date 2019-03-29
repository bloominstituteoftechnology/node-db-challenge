const express = require('express');
const helmet = require('helmet');
const projectRouter = require("./routes/project");
const actionRouter = require("./routes/action");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);


module.exports = server;