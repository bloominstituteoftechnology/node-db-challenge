const express = require('express');
const server = express();
const ProjectRouter = require('./projects/project-router');

server.use(express.json());
server.use('/api/projects', ProjectRouter);

module.exports = server;