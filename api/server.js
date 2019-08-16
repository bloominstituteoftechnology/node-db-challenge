const express = require('express');
const helmet = require('helmet');

const actionRouter = require('../action/action-router');
const projectRouter = require('../project/project-router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/action', actionRouter);
server.use('/api/project', projectRouter);


server.get('/', (req, res) => {
    res.send('Hello World!')
});


module.exports = server;