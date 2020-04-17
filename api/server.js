const express = require('express');
const projectRouter = require('../projects/project-router');

const server = express();

server.get('/', (req, res) => {
  res.send({server: 'up'});
});

server.use('/api/projects', projectRouter);

module.exports = server;
