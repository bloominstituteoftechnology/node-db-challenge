const express = require('express')

const helmet = require('helmet')

const tasksRouter = require('../tasksFolder/tasks-router')

const server = express()

server.get('/', (req, res) => {
    res.json({ message: `we don't need anymore build weeks....lol`})
})

server.use(helmet())
server.use(express.json())

server.use('/api', tasksRouter)

module.exports = server