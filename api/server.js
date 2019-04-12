const express = require('express');
const helmet = require('helmet');

const actionRouter = require('../action/action-router.js');
const projectRouter = require('../project/project-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/action', actionRouter);
server.use('/api/project', projectRouter);


//check
server.get('/', (req, res) => {
    res.send('Hello World!')
});


module.exports = server;