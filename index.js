const express = require('express');
const server = express();
const knexConfig = require('./knexfile')
const knex = require('knex')
const db = knex(knexConfig.development)
/* const cors = require('cors'); */



/* server.use(cors()); */

server.use(express.json())

server.post('/projects', async function(req, res){
    let data = req.body;
    
    try{
        const id = await db('projects').insert(data);
        res.status(200).json(id);
    }
    catch(err){
        res.status(500).json({message: 'Error handling request.'})
    }
})

server.post('/actions', async function(req, res){
    let data = req.body;
    let {description , project_id } = req.body;
    
    try{
        if(!project_id || !description){
            res.status(400).json({message: 'New actions require a Project ID and Description'})
        }
        const id = await db('actions').insert(data);
        res.status(200).json(id);
    }
    catch(err){
        res.status(500).json({message: 'Error handling request.'})
    }
})

 server.get('/projects/:id', async function(req, res){
    try{
        let {id} = req.params;
        const project = await db('projects').where({id});
        const actions = await db('actions').where({project_id: id})
        
        
        res.status(200).json({...project[0], actions: actions})
    }
    catch(err){
        res.status(500).json({message: 'Error handling request.'})
    }
});

server.get('/projects', async function(req, res){
    try{
        const projects = await db('projects');    
        res.status(200).json(projects)
    }
    catch(err){
        res.status(500).json({message: 'Error handling request.'})
    }
});




server.listen(8888, ()=> console.log('Server listening on Port 8888'))