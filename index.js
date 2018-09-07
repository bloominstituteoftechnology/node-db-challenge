const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json()); // don't forget this

//start server
server.get('/', (req, res) => {
res.send('API Running...');
});

//POST REQUEST
server.post('/api/projects', (req, res) => {
    const project = req.body;
    // console.log(project);
    db.insert(project)
    .into('projects')
    .then(id => {
    res.status(201).json(id);
    })
    .catch(err => res.status(500).json(err));
    });


server.listen(9000);