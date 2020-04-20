const express = require('express');

const ProjectsRouter = require('./Projects/projects-router');
const ResourcesRouter = require('./Resources/resources-router')
const TasksRouter = require('./Tasks/tasks-router')
const server = express();
server.use(express.json());

server.get("/", (req, res) => {
    res.json({
        message: "yay"
    })
})


server.use('/api/projects', ProjectsRouter);
server.use('/api/resources', ResourcesRouter);
server.use('/api/tasks', TasksRouter);
module.exports = server;