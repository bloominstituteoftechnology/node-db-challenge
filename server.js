const express = require("express");

const BussinessRouter = require("./rules/rules-router.js");

const server = express();

server.use(express.json());
server.use("/api/rules", RulesRouter);

module.exports = server;