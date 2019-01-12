const express = require('express');
cosnt knex = require('knex');

const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5050;

server.use(express.json());

server.post('/api/projects',(req, res)=>{
    const project = req.body;
    if(!project.name || !project.description){res.status(400).json({message:"Please provide a name and a description "})}
    db('projects').insert(project)
    .then(post =>{
        res.status(201).json(post)
    }).catch(err=>{
        res.status(404).json({error:"There was an error while saving the project to the database"})
    })
} )

server.post('/api/actions',(req, res)=>{
    const actions = req.body;
    if(!actions.name || !actions.description){res.status(400).json({message:"Please provide a description for this action. "})}
    db('action').insert(actions)
    .then(action_post =>{
        res.status(201).json(action_post)
    }).catch(err=>{
        res.status(404).json({error:"There was an error while saving the action to the database"})
    })
} )


server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
})