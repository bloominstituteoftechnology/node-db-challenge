const express = require('express')
const server = express();
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
server.use(express.json());

server.get('/', (req, res) => {
    res.send('im working')
})

server.listen(9000, () => console.log('Running on port 9000'))