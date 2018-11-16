const express = require('express');
const morgan = require('morgan');

const knex = require('knex');
const knexConfig= require('./knexfile');
const db = knex(knexConfig.development);

const PORT = 9000;

const server = express();

server.use(express.json());
server.use(morgan('dev'));

server.get('/api/projects', async (req, res) => {
  const payload = await db('projects');
  res.status(200).json(payload);
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});