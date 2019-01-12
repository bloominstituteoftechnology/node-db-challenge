const express = require('express');
const server = express();

server.get('/', (req,res) => {
    res.json({api : "Sprint Challenge server"});
});

module.exports = server;
