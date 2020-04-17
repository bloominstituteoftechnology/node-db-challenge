const express = require('express');

const projectRouter = require('../projects/project-router');
const resourcesRouter = require('../resources/resources-router');
const taskRouter = require('../tasks/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', taskRouter);

module.exports = server;
