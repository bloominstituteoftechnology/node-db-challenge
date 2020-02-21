const express = require("express");

const server = express();

const ProjectRouter = require('./projects/project-router')

server.use(express.json());

server.use('/api/projects', ProjectRouter)

server.listen(9000, () => {
    console.log("server is up and running on port 9000")
})

