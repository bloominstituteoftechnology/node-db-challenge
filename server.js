const express = require('express');
const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('./db.js');

const server = express();

server.use(bodyParser.json());

server.post('/projects', function (req, res) {
    const { project } = req.body;
    knex
        .insert(project)
        .into('projects')
        .then(function (ids) {
            res.status(200).json(ids);
        })
        .catch(function (err) {
            res.status(500).json({ error: 'Could not create projects' });
        });
});

server.get('/projects', function (req, res) {
    knex('projects')
        .then(function (listOfProjects) {
            res.status(200).json(listOfProjects);
        })
        .catch(function (err) {
            res.status(500).json({ error });
        });
});

server.get('/projects/users/:id', function(req, res) {
    const { id } = req.params;

    knex('projects')
        .where('id', id)
        .then(function(projectInfo) {
            res.status(200).json(projectInfo);
        })
        .catch(function(error) {
            res.status(500).json({ error });
        });
});

// server.get('/projects/:id/context', function(req, res) {
// })

const port = 3000;
server.listen(port, function () {
    console.log(`Server Listening on ${port}`);
});