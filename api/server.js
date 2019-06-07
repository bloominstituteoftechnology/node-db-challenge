const express = require('express');

const projects = require("../data/projects-router");

const server = express();

server.use(express.json());

server.use('/api/projects', projects);
server.get("/",(req,res)=>{
    res.sendStatus(200)
})
module.exports = server;