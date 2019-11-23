const express = require('express');
const helmet = require('helmet');


const taskRouter = require('./routers/taskRouter');
const resourceRouter = require('./routers/resRouter');
const projectRouter = require('./helpers/projModel');


const server = express();

server.use(express.json());
server.use(helmet);


server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);


module.exports = server;