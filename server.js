const express = require('express')
const helmet = require('helmet')



// Initialize Server
const server = express()

//Call Middleware
server.use(helmet())
server.use(express.json())

// Server Endpoints


// Sanity Check
server.get('/', (req, res) => {
    res.json({api: 'up'})
})

module.exports = server;