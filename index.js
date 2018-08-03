const express = require('express');
const helmet = require('helmet');
const db = require('./data/db.js');

const server = express();

server.use(express.json());
server.use(helmet());

// PROJECT.GET
server.get('/project', (req, res) => {

    db.select()
    .table('project')
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {res.status(500).json(err)});
})

// PROJECT.GETID
server.get('/project/:id', (req, res) => {
    const projectId = req.body;

    db('action as a')
    .join('project as p', 'p.id', 'a.project_id')
    .select('p', 'a as actions:')
    .where('a.project_id', projectId);
})

// PROJECT.POST
server.post('/project', (req, res) => {
    const projectInfo = req.body;

    db.insert(projectInfo)
    .into('project')
    .then(response => {
        res.status(201).json(response[0]);
    })
    .catch(err => {res.status(500).json(err)});
});


// ACTION.GET
server.get('/action', (req, res) => {

    db.select()
    .table('action')
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {res.status(500).json(err)});
})

// ACTION.POST
server.post('/action', (req, res) => {
    const actionInfo = req.body;

    db.insert(actionInfo)
    .into('action')
    .then(response => {
        res.status(201).json(response[0]);
    })
    .catch(err => {res.status(500).json(err)});



});

server.listen(8000, () => console.log('Port: 8000'));