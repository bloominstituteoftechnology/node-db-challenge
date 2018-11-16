const express = require('express');
const server = express();
const knexConfig = require('./knexfile')
const knex = require('knex')
const db = knex(knexConfig.development)
/* const cors = require('cors'); */



/* server.use(cors()); */

server.use(express.json())




server.listen(8888, ()=> console.log('Server listening on Port 8888'))