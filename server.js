const express = require("express");
const helmet = require("helmet");
const db = require ("./data/db-config.js");

const server = express();
const projectRouter= require("./api/project-router")
const resourceRouter= require("./api/resource-router")
const taskRouter = require("./api/taskRouter")

server.use(helmet());
server.use(express.json());

server.use("/api/project", projectRouter),
server.use("/api/resource", resourceRouter),
server.use("/api/task", taskRouter),




module.exports= server;