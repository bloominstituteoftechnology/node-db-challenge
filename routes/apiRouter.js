const express = require('express');
const server = express.Router();

const projectRoutes = require('./projectRoutes');
const actionRoutes = require('./actionRoutes');

server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

module.exports = server;