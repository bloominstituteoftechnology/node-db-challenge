const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const server = express();
const db = knex(dbConfig.development);

server.get('/', (req, res) => {
  res.send('good to go');
})

server.listen(8000, () => {
  console.log('== LISTENING ON PORT 8000 ==');
})
