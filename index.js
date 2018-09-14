const express = require('express');
const server = express();
const knex = require('knex');
const dBConfig = require('./knexfile');
const db = knex(dBConfig.development);

//Middleware
server.use(express.json());

//Endpoints

//Projects Table
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db.insert(project).into('projects').then(res => res.status(201).json(res))
    .catch(err => res.status(500).json(err));
});
server.get('/api/projects', (req, res) => {
    db('projects').then(projects => { res.status(200).json(projects);
})
.catch(err => res.status(500).json(err));
});







server.listen(3000, console.log('Listening on Port 3000'));