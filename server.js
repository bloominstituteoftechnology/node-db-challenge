const express = require("express");

const BussinessRouter = require("./businessRules/business-router.js");

const server = express();

server.use(express.json());
server.use("/api/businessRules", BusinessRouter);

module.exports = server;
