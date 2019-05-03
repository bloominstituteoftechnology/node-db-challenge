const express = require('express');
const helmet = require('helmet');
const server = express();

// Import Routers
const projectsRouter = require('./projects/projects-router.js');
const actionsRouter = require('./actions/actions-router.js');

// Configure Middleware
server.use(helmet());
server.use(express.json());

// Use Routers
server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

// Hello. Server Test.
server.get('/', (req, res) => {
    res.send({ message: 'Hello from Patty. BE Week2 Sprint Challenge'})
});

module.exports = server;