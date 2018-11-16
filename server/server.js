const express = require('express');

const projectRouter = require('../endpoints/projects');
const actionRouter = require('../endpoints/actions');

const server = express();
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);



server.get('/', (req, res) => {
    res.json({ api: 'running' });
});



module.exports = server;