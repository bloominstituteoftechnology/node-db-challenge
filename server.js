const express = require('express');
const helmet = require('helmet');
const resourcesRouter = require('./route/resource-router.js')
const projectRouter = require('./route/project-router.js')


const db = require('./data/db.js');

const server = express();
server.use(express.json());


server.use('/api/projects', projectRouter)
server.use('/api/resources', resourcesRouter)


module.exports = server; 