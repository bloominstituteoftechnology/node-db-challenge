const express = require('express');
const helmet = require("helmet");

const projectRouter = require('./projects/project-router');
const taskRouter = require('./tasks/task-router');
const resourceRouter = require('./resources/resource-router');
const proresRouter = require('./projects-resources/prores-router');

require('dotenv').config()

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/projects-resources', proresRouter);

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: "Something is wrong, check again.", err
    })
})

module.exports = server;
