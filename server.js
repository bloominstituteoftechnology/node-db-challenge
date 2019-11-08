const express = require('express');
const helmet = require('helmet');
const server = express();
const router = require('./projects/router.js');

server.use(express.json());
server.use(helmet());
server.use('/api/projects', router);

server.get('/', (req, res) => {
    res.send('<h1>api check</h1>')
})

module.exports = server;