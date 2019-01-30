const express = require('express')
const actionRoutes = require('./data/actions/actionRoutes')
const projectRoutes = require('./data/projects/projectRoutes')
const mwConfig = require('./mwConfig')

const PORT = 5100
const server = express()
server.use(express.json())

mwConfig(server)

server.use('/api/actions', actionRoutes)
server.use('/api/projects', projectRoutes)

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
