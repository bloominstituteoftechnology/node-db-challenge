const express = require("express");
const helmet = require("helmet");

const projectRouter = require("../router/projects-router.js");
const actionsRouter = require("../router/actions-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/", projectRouter);
server.use("/api/", actionsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ message: "server running" });
});

module.exports = server;
