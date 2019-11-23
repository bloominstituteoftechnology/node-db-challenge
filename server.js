const express = require('express');
const helmet = require('helmet');


const taskRouter = require('./routers/taskRouter.js');
const resourceRouter = require('./routers/resRouter.js');
const projectRouter = require('./routers/projRouter.js');


const server = express();

server.use(express.json());
server.use(helmet());


server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);


module.exports = server;