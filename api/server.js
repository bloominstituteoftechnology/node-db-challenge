// bring in express
const express = require('express')
// bring in router
// initialize express server
const server = express()
// define global middlewares
server.use(express.json())
// define routes
// export server
module.exports = server
