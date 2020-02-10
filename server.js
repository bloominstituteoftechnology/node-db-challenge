const express = require('express');

const server = express();
const projectRouter = require('./projects/projects-router');

server.use(express.json());
server.use('/api/projects', projectRouter);

module.exports = server; 

