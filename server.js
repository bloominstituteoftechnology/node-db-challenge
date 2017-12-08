const bodyParser = require('body-parser');
const express = require('express');

const sqlite = require('sqlite3');
const knex = require('./dbconfig.js')

const server = express();
const port = 1969

server.use(bodyParser.json());

server.get('/projects', (req, res) => {
    const projects = knex('projects')
    .then((projects) => {
        res.json(projects)
    }) 
    .catch((err) => {
        res.status(400).json(err)
    });
});
server.get('/actions', (req, res) => {
    const actions = knex('actions')
    .then((actions) => {
        res.json(actions)
    }) 
    .catch((err) => {
        res.status(400).json(err)
    });
});
server.get('/context', (req, res) => {
    const context = knex('contexts')
    .then((context) => {
        res.json(context)
    }) 
    .catch((err) => {
        res.status(400).json(err)
    });
});

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});

