const express = require('express');
const knex = require('knex');

const dbConfig = require('./knexfile.js');

const server = express();
const port = 5050;
const db = knex(dbConfig.development);

server.use(express.json());

server.listen(port, () => {
  console.log(`\n*** Web API listening on http://localhost:${port} ***\n`);
});
