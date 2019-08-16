const express = require('express');
const helmet = require('helmet');

const projectRouter = require('./projects/project-router.js');

const resourceRouter = require('./resources/resource.router.js');
const taskRouter = require('./task/task-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);


module.exports = server;