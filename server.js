const express = require('express');

const server = express()
const helmet = require('helmet')

server.use(helmet)



module.exports = server;
