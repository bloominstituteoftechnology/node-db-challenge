const express = require('express');

const server = express();

server.use(express.json());
const knex = require('knex');

const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);
server.post('/api/projects', (req,res)=>{
    const project= req.body;
    db('projects')
        .insert(project)
        .then(id=>{
            res.status(201).json(id)
        })
        .catch(error=>{
            res.status(500).json({message:"error adding new project", error});
        })
})
server.post('/api/actions', (req,res)=>{
    const action= req.body;
    db('actions')
        .insert(action)
        .then(id=>{
            res.status(201).json(id)
        })
        .catch(error=>{
            res.status(500).json({message:"error adding new action", error});
        })
})
server.get('/api/projects/:id', (req,res)=>{
    const{id}=req.params
    db
        .select()
        .from('projects')
        .join('actions','projects.id','=','actions.project_id')
        .where('projects.id',id)
        .then(project=>res.status(201).json(project))

})
server.get('/api/projects', (req,res)=>{
    db
        .select()
        .from('projects')
        .then(projects=>{
            res.status(201).json(projects)
        })
})
const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});