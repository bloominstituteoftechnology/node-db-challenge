const express = require('express');
const knex = require('knex');

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
    if(!actions.action_description){res.status(400).json({message:"Please provide a description for this action. "})}
    db('action').insert(actions)
    .then(action_post =>{
        res.status(201).json(action_post)
    }).catch(err=>{
        console.log(err)
        res.status(404).json({error:"There was an error while saving the action to the database"})
    })
} )

server.get('/api/projects/:id', (req, res)=>{
    const { id } = req.params;
    db('projects').join('action','project_id','projects.id')
    .where({id:id})
    .then(projects =>{
        if(projects.length > 0){
            res.json(projects)
        }else{
            res.status(404).json({message:'The project with the specified id does not exist'})
        }
    }).catch(err =>{
        console.log(err)
        res.status(500).json({error:"Trouble getting the project"})
    })
})

//Just for testing purposes
// server.get('/api/projects', (req, res) => {
//     db('projects').leftJoin('action', 'project_id', 'project.id')
//     .then(pInfo => {
//       res.send(pInfo);
//     });
//   });


//   server.get('/api/actions', (req, res) => {
//     db('action')
//     .then(aInfo => {
//       res.send(aInfo);
//     });
//   });

server.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}!`)
})