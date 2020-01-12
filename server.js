const express = require('express');

const projectRouter = require('./projects/projectRouter.js');
const tasksRouter = require('./tasks/tasksRouter.js');
const resourceRouter = require('./resources/resourceRouter.js');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/tasks', tasksRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;