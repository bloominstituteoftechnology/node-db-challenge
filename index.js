const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API Running...');
});

server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
} );

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => res.status(500).json(err));
} );

server.post('/api/projects',(req, res) => {
    
    db.insert(req.body).into('projects').then(response => {
        res.status(201).json(response);
    }).catch(err => {
        console.error('Error', err);
        res.status(500).json({message: "Error creating project"});
    });
});

server.post('/api/actions',(req, res) => {
    
    db.insert(req.body).into('actions').then(response => {
        res.status(201).json(response);
    }).catch(err => {
        console.error('Error', err);
        res.status(500).json({message: "Error creating project"});
    });
});

server.listen(8000);