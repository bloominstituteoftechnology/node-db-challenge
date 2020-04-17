const express = require('express');

const projectRouter = require('./projects/projectsRouter.js');
const resourcesRouter = require('./resources/resourcesRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);

module.exports = server;