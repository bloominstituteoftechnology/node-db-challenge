const express = require('express');
const server = express();

const projectsRouter = require('./API/projects/projects-router.js');

server.use(express.json());
server.use('/api/projects', projectsRouter)


server.get('/', (req, res) => {
    res.send('welcome to projects api!')
})

module.exports = server;