const express = require("express");

// const ProjectsRouter = require("./projects/projects-router.js");

const server = express();

server.use(express.json());
server.get("/", (req, res) => res.send("<h1>Node DB4 Sprint Challenge</h1>"));
server.use("/api/projects", ProjectsRouter);

module.exports = server;
