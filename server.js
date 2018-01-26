const express = require('express');

const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('./db.js');

const server = express();

server.use(bodyParser.json());

// project routes

server.post('/projects', (req, res) => {
    const project = req.body;

    knex.insert(project)
        .into('projects')
        .then(function(ids) {
            res.status(201).json({ ids });
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not insert into table' });
        });
});

server.get('/projects', (req, res) => {
    const projects = knex('projects')
        .then(function(projects) {
            res.status(200).json(projects);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not insert into table' });
        });
});

const port = 3000;
server.listen(port, () => {
    console.log(`server running at ${port}`);
})