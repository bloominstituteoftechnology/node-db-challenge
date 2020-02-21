const express = require('express');

const server = express()
const helmet = require('helmet')
const projectRouter = require('./projects/project-router.js')
const resourceRouter = require('./resources/resource-router.js')
server.use(helmet())
server.use(express.json())


server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);


module.exports = server;
