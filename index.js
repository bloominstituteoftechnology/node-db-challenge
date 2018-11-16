const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const server = express();
server.use(express.json());

const db = knex(knexConfig.development);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'At root' });
});

server.post('/api/projects', async (req, res) => {
    
});

const port = 9000;
server.listen(port, () => console.log(`\nServer up on port ${port}\n`));