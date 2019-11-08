const express = require('express');

const projectRouter = require('./projects/project-routes');
const resourceRouter = require('./resources/resource-routes');
const taskRouter = require('./tasks/task.routes');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;