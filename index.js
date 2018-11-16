const express = require('express')
const projectsRoute = require('./api/projectsRoute')
const actionsRoute = require('./api/actionsRoute')

const port = 8000
const server = express()

server.use(express.json())

server.use('/api/projects', projectsRoute)
server.use('/api/actions', actionsRoute)

server.get('/', (req, res) => {
    res.send('hi')
})

server.listen(port, () => {
    console.log(`Server is active on port ${port}.`)
})
