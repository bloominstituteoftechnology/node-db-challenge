// bring in express
// --------------------------------------------|
const express = require('express')

// bring in routers
// --------------------------------------------|
const ProjectsRouter = require('../projects/projects-router.js')

// initialize express server
// --------------------------------------------|
const server = express()

// define global middlewares
// --------------------------------------------|
server.use(express.json())

// define routes
// --------------------------------------------|
server.use('/api/projects', ProjectsRouter)

// export server
// --------------------------------------------|
module.exports = server
