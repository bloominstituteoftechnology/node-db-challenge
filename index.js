const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


const server = express();

server.use(helmet());
server.use(morgan('combined'));
server.use(express.json());

const port = 9000;

server.post('/api/projects', (req, res)=> {
    const project = req.body;
    db.insert(project)
    .into('projects')
    .then(ids=> {
        res.status(201).json(ids);
    })
    .catch(err=> {
        res.status(500).json(err);
    })
});

server.listen(port, ()=> console.log(`API running on port ${port}`));