const express = require("express");

const db = require("./data/dbConfig.js");

const ProjectsRouter = require("./projects-router.js");
const ResourcesRouter = require("./resources-router.js");
const TasksRouter = require("./tasks-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", ProjectsRouter);
server.use("/api/resources", ResourcesRouter);
server.use("/api/tasks", TasksRouter);

server.get("/", (req, res) => {
    res.send(`
    <h2>Hi!!!</h2>
   
  `);
});

module.exports = server;
