const express = require('express');
const helmet = require('helmet');

const schemeRouter = require('./schemes/scheme-router');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api', schemeRouter);

module.exports = server;