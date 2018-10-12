const express = require('express')
const projectsRoutes = require('./data/routers/projectsRoutes.js')
const actionsRoutes =require('./data/routers/actionsRoutes')
const server = express()
const port = 5555;

server.use(express.json())

server.use('/api/projects', projectsRoutes)
server.use('/api/actions', actionsRoutes)

server.listen(port, err => {
    console.log(`Server is running on port: ${port}`)
})