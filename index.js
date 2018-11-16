const express = require('express');
const knex = require('knex')

const knexConfig = require('./knexfile')
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());



const port = 8250
server.listen(port, console.log(`\n=== we are listening... on ${port} ===\n`));