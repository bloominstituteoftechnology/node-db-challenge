const express = require('express');
const server = express();

const projectRouter = require('./schema/projects-router.js');

server.get('/', (req, res) => {
    res.send(`<h2>Sprint!</h2>`);
  });

server.use(express.json()); // built-in middleware, no need to install it

//endpoints
server.use('/api/projects', projectRouter);


module.exports = server;