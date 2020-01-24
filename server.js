const express = require('express');
const helmet = require('helmet');
const server =  express();

server.use(helmet())
server.use(express.json());


server.get('/', (req, res) => {
    res.json({message: "Hello from testing API is working"});
});

module.exports = server;