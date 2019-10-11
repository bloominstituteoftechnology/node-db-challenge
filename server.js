const express = require('express');

const server = express();

server.use(express.json());

const pRouter = require('./projects/projects-router.js');
const rRouter = require('./resources/resources-router.js');
const tRouter = require('./tasks/tasks-router.js')
server.use('/api/projects', pRouter);
server.use('/api/resources', rRouter);
server.use('/api/tasks', tRouter);

server.get('/', (req, res) => {
    res.send(`
      <h2>Lambda Sprint II:)</h>
      <p>Let's get started... </p>
    `);
});

module.exports = server;
