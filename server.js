const express = require("express");

const projectsRouter = require("./data/projects/projects-router.js");
// const actionsRouter = require("./data/actions/actions-router.js");

const server = express();

server.use(express.json());

//Routes
server.use("/api/projects", projectsRouter);
// server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ hello: "World!" });
});

module.exports = server;
