const express = require('express');

const server = express();

server.use(express.json());
const knex = require('knex');

const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});