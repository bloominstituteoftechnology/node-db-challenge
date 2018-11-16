const express = require('express')
const helmet = require('helmet')
const projectRoutes = require('./routes/projectRoutes.js')
const actionRoutes = require('./routes/actionRoutes.js')



// Initialize Server
const server = express()

//Call Middleware
server.use(helmet())
server.use(express.json())

// Server Endpoints
server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)


// Sanity Check
server.get('/', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server;