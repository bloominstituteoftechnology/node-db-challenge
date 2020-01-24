const express = require('express');

const projectsRouter = require('./planner/projectsRouter.js');
const resourcesRouter = require('./planner/resourcesRouter.js');
const tasksRouter = require('./planner/tasksRouter.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

server.get('/', (req, res) => {
    return res.json({message: "Yay Server is running!"})
})

module.exports = server;