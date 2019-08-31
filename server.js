const express = require('express');
const ProjectRouter = require('./projects/project-router');

const server = express();

server.use(express.json());
server.use('/projects', ProjectRouter);

module.exports = server;