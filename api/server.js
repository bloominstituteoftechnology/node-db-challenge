const express = require('express')
const helmet = require('helmet')

const projectsRouter = require('../routers/projects/projects-router.js')
const actionsRouter = require('../routers/actions/actions-router')

const server = express();

server.use(helmet());
server.use(express.json())

server.use('/api/projects', projectsRouter)
server.use('/api/actions', actionsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ hello: "Whoa!" })
}) 

module.exports = server