const express = require('express')
const helmet = require('helmet')
const knex = require('knex')

const knexConfig = require('./knexfile')

const db = knex(knexConfig.development)
const server = express()

server.use(express.json())
server.use(helmet()) 

const port = 9000;
server.listen(port, function(){
    console.log(`\n===APP listening on port ${port} ===\n`)
})