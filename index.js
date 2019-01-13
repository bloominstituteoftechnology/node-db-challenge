const express = require('express');
const knex = require('knex');

const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;

server.use(express.json());

server.get('/api/zoos', (req, res) => {
  db('zoos').leftJoin('addresses', 'zoo_id', 'zoos.id')
  .then(zooInfo => {
    res.send(zooInfo);
  });
});

server.get('/api/animals', (req, res) => {
  db('animals').leftJoin('species', 'species_id', 'species.id')
  .then(animalInfo => {
    res.send(animalInfo);
  });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
