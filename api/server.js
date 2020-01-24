const express = require('express');
const helmet = require('helmet');
const server =  express();
const ProjectRouter = require('../projects/projects-router')
const ResourcesRouter = require('../resources/resources-router')
const TaskRouter = require('../tasks/tasks-router')

server.use(helmet())
server.use(express.json());

server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TaskRouter)


server.get('/', (req, res) => {
    return res.json({message: "it works"})
})




module.exports = server;