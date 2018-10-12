const express = require('express');
const helmet = require('helmet');
const server = express();
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.use(helmet());
server.use(express.json());

//routes





//server

server.listen(9000, () => {
    console.log('Server started on port 9000');
})