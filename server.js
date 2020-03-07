const express = require("express");

const rulesRouter = require("./rules/rules-router.js");

const server = express();

server.use(express.json());
server.use("/api/projects", rulesRouter);

module.exports = server;