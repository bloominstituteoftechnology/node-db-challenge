const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");

const ProjectRouter = require("./projects/router");

const server = express();

server.use(helmet());
server.use(morgan());
server.use(express.json());

module.exports = server;
