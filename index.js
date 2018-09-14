const express = require('express');

const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

//routes
const projectRoutes = require('./routes/projectRoutes.js');
const actionRoutes = require('./routes/actionRoutes.js');

const server = express();

//middleware
server.use(express.json());
server.use('/projects', projectRoutes);
server.use('/actions', actionRoutes);

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

server.listen(8000, () => console.log('Running on port 8000'));