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
    db('projects').where('id', id)
    .then(joined =>{
        db('action').where({project_id:id}).first()
        .then(actions =>{
          joined[0].actions = actions
            res.json(joined)
        }).catch(error =>{
            res.status(500).json({error:"The project with the specified id does not exist!"})
        })
    })
    .catch(err=>{
        console.log(err)
        res.status(500).json({message:"that joined did not work"})
    })
})

//Just for testing purposes
// server.get('/api/projects', (req, res) => {
//     db('projects').leftJoin('action','project_id', 'projects.id')
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


