const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());







const port = 7000;
server.listen(port, () => {
    console.log(`Server started on port ${port}!`)
})