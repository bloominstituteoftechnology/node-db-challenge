const express = require('express');
const recipeRouter = require('./routers/projectRouter.js');
const server = express();

server.use(express.json())
server.use('/api/projects', recipeRouter)

module.exports = server;