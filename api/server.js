const express = require('express')

const projectrouter = require('../project/projectrouter')
const taskrouter = require('../tasks/tasksrouter')
const resourcerouter = require('../resources/resourcesrouter')

const server = express();

server.use(express.json())

server.use('/api/project', projectrouter)
server.use('/api/task', taskrouter)
server.use('/api/resource', resourcerouter)


module.exports = server;



