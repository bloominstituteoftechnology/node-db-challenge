const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());


server.get('/', (req, res) => {
    res.json({ api: 'up' });
});

server.get('/projects', (req, res) => {
    db('projects')
      .then(students => res.status(200).json(students))
      .catch(err => res.status(500).json(err));
});


const port = 8000;
server.listen(port, () => console.log(`\n== Port: ${port} ==\n `));