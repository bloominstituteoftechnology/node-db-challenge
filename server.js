const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
// const knexConfig = require('knexfile.js');
// const projectModel = require('./data/helpers/projectModel');
// const actionModel = require('./data/helpers/actiontModel');



// const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

//test 
server.get('/', (req, res) => {
    res.send('Hello World!!');
})

server.post('/projects', (req, res) => {
    const projectInfo = req.body;
    projecModel.insert(projectInfo)
    .then(project => {
        res.status(201).json({ success: true, project });
    })
    .catch(err => {
        res.status(404).json({
            success: false,
            message: 'I cannot find the project you are looking for'
        });
    })
})


server.post('/actions', (req, res) => {
    const actionInfo = req.body;
    actionModel.insert(actionInfo)
    .then(count => {
        if(count) {
            res.status(201).end()
        }
        else {
            res.status(404).json({message: 'There is no action with specified id'})
        }
    })
    .catch(err => res.status(500).json({message: 'Error deleting that id'}))
})


server.get('/projects/:id', (req, res) => {
    const id = req.params.id;
    projectModel.getProjectActions(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({
            error: 'error retrieving the actions'
        })
    })
})

module.exports = server;