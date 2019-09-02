const express = require('express');
const helmet = require('helmet');

const projects = require('./projects-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', projects);

module.exports = server;
