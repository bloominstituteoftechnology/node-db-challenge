// bring in express
// --------------------------------------------|
const express = require('express')

// bring in routers
// --------------------------------------------|
const ProjectsRouter = require('../projects/projects-router.js')
const ResRouter = require('../resources/res-router.js')
const TaskRouter = require('../tasks/tasks-router.js')
// initialize express server
// --------------------------------------------|
const server = express()

// define global middlewares
// --------------------------------------------|
server.use(express.json())

// define routes
// --------------------------------------------|
server.use('/api/projects', ProjectsRouter)
server.use('/api/resources', ResRouter)
server.use('/api/tasks', TaskRouter)

// export server
// --------------------------------------------|
module.exports = server
