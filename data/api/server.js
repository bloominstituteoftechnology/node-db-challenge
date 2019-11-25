const express = require('express')

// const projectrouter = require('../project/projectrouter')

const server = express();

server.use(express.json())

// server.use('/api/project', projectrouter)

module.exports = server;

