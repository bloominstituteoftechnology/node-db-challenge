const express = require('express');
const morgan = require('morgan');
const db = require('knex')(require('./knexfile').development);

const server = express();
server.use(express.json());
server.use(morgan('dev'));

server.get('/api/projects', async (req, res) => {
  const payload = await db('projects');
  res.status(200).json(payload);
});

server.listen(8000, () => {
  console.log('Server listening on 8000');
});
