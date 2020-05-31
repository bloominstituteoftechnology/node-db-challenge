const express = require('express');

const projectRouter = require('./project/project-router.js')

const server = express();



server.use(express.json());
server.use('/api', projectRouter)

server.get('/', (req, res) => {
    res.send(`Server is Running...`);
});


server.use(function (req, res) {
    res.status(404).send('No Data to Display...')
});
module.exports = server;