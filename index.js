const express = require('express')
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();
const port = 9000;
server.use(express.json());

server.get('/api/projects',(req,res) => {
    db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
})

//   MVP  Endpoints
server.post('/api/projects', (req,res) => {
    const addedProject = req.body;
    if(!addedProject){
        res.status(500).send("Please provide all fields")
    }else{
        db('projects')
        .insert(addedProject)
        .then(projectID => res.status(200).json(projectID))
        .catch(err => res.status(500).json({youdonefuckedup : err}));
    }
})

server.post('/api/actions', (req,res) => {
    const addedAction = req.body;
    if(!addedAction.name || !addedAction.project_id || !addedAction.description){
        res.status(500).send("Please provide all fields")
    }else{
        db('actions')
        .insert(addedAction)
        .then(actionID => res.status(200).json(actionID))
        .catch(err => res.status(500).json({youdonefuckedup : err}));
    }
})

server.listen(port,() => {console.log(`server listening on port ${port}`)})