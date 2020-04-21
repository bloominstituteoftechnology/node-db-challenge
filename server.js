const express = require("express");
const helmet = require("helmet");
const db = require ("./data/db-config.js");

const server = express();
const projectRouter= require("./api/project-router")
const resourceRouter= require("./api/resource-router")
const taskRouter = require("./api/taskRouter")

server.use(helmet());
server.use(express.json());

server.use("/", projectRouter),
server.use("/resource", resourceRouter),
server.use("/task", taskRouter),




module.exports= server;