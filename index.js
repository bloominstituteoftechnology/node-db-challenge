const express = require('express')
const knex = require('knex')
const knexConfig = require('./knexfile')
const DB = knex(knexConfig.development)
const server = express()
const PORT = 3300

server.use(express.json())

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})