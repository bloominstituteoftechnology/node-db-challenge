const express = require('express')
const knex = require('knex')
const db = require('./data/dbMethods.js')

const server = express()

server.use(express.json())

// routes go here

server.listen(9000, () => console.log('\n== Port 9k ==\n'))
