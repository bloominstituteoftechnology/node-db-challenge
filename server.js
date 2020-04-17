const express = require("express");
const cors = require("cors");
const server = express();

const resourceRouter = require("./data/routers/resource-router");
const projectRouter = require("./data/routers/project-router");
const taskRouter = require("./data/routers/task-router");

server.use(express.json());
server.use(cors());

server.use("/api/resources", resourceRouter);
server.use("/api/projects", projectRouter);
server.use("/api/tasks", taskRouter);

server.get("/", (req, res) => res.json({ api: "up" }));

module.exports = server;
