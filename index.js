const express = require('express');
const knex = require('knex');

const server = express();
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

server.use(express.json());






const port = 3300;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`));