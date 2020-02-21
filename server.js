const express = require("express");

const BussinessRouter = require("./businessRules/business-router.js");

const server = express();

server.use(express.json());
server.use("/api/businessRules", BussinessRouter);

module.exports = server;
