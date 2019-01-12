const express = require('express');
const server = express();

const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const PORT = 9000;

server.use(express.json());


//POST for adding projects.

server.post('/api/projects', (req, res) =>{
    const project = req.body;
    if(project.name && project.description && project.finished){
        db('project').insert(project)
        .then(id => {
            res
            .status(201)
            .json({message: `Project ${id} created`})
        })
        .catch(err=>{
            res
            .status(500)
            .json({error: "There was an error while saving your project to the database"})
        })
    } else {
        res
        .status(400)
        .json({errorMessage: "Please provide the necessary details for the project"})
    }
});

// POST for adding actions.

server.post('/api/actions', (req, res) =>{
    const action = req.body;
    if(action.description && action.finished){
        db('action').insert(action)
        .then(id => {
            res
            .status(201)
            .json({message: `Action ${id} created`})
        })
        .catch(err=>{
            res
            .status(500)
            .json({error: "There was an error while saving your action to the database"})
        })
    } else {
        res
        .status(400)
        .json({errorMessage: "Please provide the necessary details for the action"})
    }
});

// GET for retrieving a project by its id that returns actions aswell

server.listen(PORT, () =>{
    console.log(`Server is listening on ${PORT}`)
})