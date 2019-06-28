const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projects-router');
const actionsRouter = require('../actions/actions-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('api/projects', projectsRouter);
server.use('api/actions', actionsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ hello: 'World'});
});

module.exports = server;