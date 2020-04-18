const express = require("express");
const helmet = require("helmet");
const db = require ("./data/db-config.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/projects', (req, res)=>{
    db("projects")
    .then(projects=> {
        res.status(200).json(projects);
    })
    .catch(err =>{
        res.status(500).json(error)
    })
});
server.get('/tasks', (req, res)=>{
    db("tasks")
    .then(tasks=> {
        res.status(200).json(tasks);
    })
    .catch(err =>{
        res.status(500).json(error)
    })
});
server.get('/resources', (req, res)=>{
    db("resources")
    .then(resources=> {
        res.status(200).json(resources);
    })
    .catch(err =>{
        res.status(500).json(error)
    })
});

module.exports= server;