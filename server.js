const express = require('express');
const helmet = require('helmet');
const db = require('./data/db-config.js');
// const ProjectRouter = require('./data/projects/project-router.js');
// const TaskRouter = require('./data/tasks/task-router');
// const ResourceRouter = require('./data/resources/resource-router');
const server = express();
server.use(express.json());
server.use(helmet());


// server.use('/api/projects', ProjectRouter);
// server.use('/api/resources', ResourceRouter);
// server.use('/api/tasks', TaskRouter);

server.get('/', (req, res) =>
  res.send('<h1>Server is up and running!!!</h1>'),
);
module.exports = server;