const express = require('express');

const knexDb = require('./data/db');

const server = express();

// === Re-factor later if there's time for routing
// const projectCrud = require('./crud/projectEndpoints');
// const actionCrud = require('./crud/actionEndpoints');
// const basicCrud = require('./crud/basicEndpoints');

// server.use(projectCrud);
// server.use(actionCrud);
// server.use(basicCrud);

// GET @ Root
server.get('/', (req, res) => {
    res.send(`The Spirit of David Allen's "GETTING THINGS DONE" Methodical API is here. Go to /projects or /actions for more data.`);
})

// === PROJECTS ===

// GET all projects

server.get('/projects', (req, res) => {
    knexDb('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({err, message: "Something's wrong with the server."})
    })
})


server.use(express.json());

const port = 8333;
server.listen(port, () => {
    console.log(`\n === Web API listening on http://localhost:${port} === \n`);
})