const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();
server.use(express.json());


server.post('/projects', (req, res) => {
    const project = req.body;
    db('projects')
        .insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Inserting' });
        })
});

server.post('/actions', (req, res) => {
    const action = req.body;
    db('actions')
        .insert(action)
        .then(id => {
            res.status(201).json(id);   //id????
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Inserting' });
        })
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .then(project => {
            
        })
})

server.listen(8000, () => console.log('Server is listening on port 8000'));