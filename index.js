const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile')
const actionRoutes = require('./data/Routes/actionRoutes')
const projectRoutes = require('./data/Routes/projectRoutes')
const DB = knex(knexConfig.development)
const server = express()
const PORT = 3300

server.use(express.json())

server.use('/api/actions', actionRoutes)
server.use('/api/projects', projectRoutes)

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})