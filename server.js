const express = require('express');

const projectRouter = require('./projects/project-router.js');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);

server.get('/', (req, res) => {
  res.send('Server is working!');
});

module.exports = server;