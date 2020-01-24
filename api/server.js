const express = require('express');
const helmet = require('helmet');
const server =  express();
const ProjectRouter = require('../projects/projects-router')

server.use(helmet())
server.use(express.json());

server.use('/projects', ProjectRouter)

server.get('/', (req, res) => {
    return res.json({message: "it works"})
})




module.exports = server;