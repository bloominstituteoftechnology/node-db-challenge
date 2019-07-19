const express = require('express');

const { projectRouter, actionRouter } = require('./routes/');

const server = express();

server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;