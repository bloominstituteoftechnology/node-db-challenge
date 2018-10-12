const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const helmet = require('helmet');
const server = express();
// Server Config
const port = 7100;
const name = `Sprint-Challenge-RDBMS`;

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
  res.send(`${name} running on port ${port}`);
});

server.post('/projects', (req, res) => {
  const project = req.body;

  db.insert(project)
    .into('projects')
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen({ port }, () => console.log(`## ${name} running on port ${port} ##`));