const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

const port = 7777;
server.listen(port, function() {
    console.log(`The Server Is Listening @ localhost:${port}`);
}) 