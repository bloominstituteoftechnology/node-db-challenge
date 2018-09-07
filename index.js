const helmet=require('helmet');
const morgan=require('morgan');
const knex=require('knex');
const dbConfig=require('./knexfile');
const db=knex(dbConfig.development);
const express=require('express');
const server=express();

server.use(morgan('dev')).use(helmet()).use(express.json());

server.get('/api/projects',(req,res)=>{
    db('projects')
        .then(response=>res.status(200).json(response))
        .catch(err=>res.status(500).json(err))
})
server.get('/api/projects/1',(req,res)=>{
    db('projects')
        .where({'id':req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(err=>res.status(500).json(err))
})
server.post('/api/projects',(req,res)=>{
    const project=req.body;
    project.description &&
    project.notes &&
    project.completed ? 
    db.insert(project)
        .into('projects')
        .then(count=>res.status(201).json(count))
        .catch(err=>res.status(500).json(err)):
        res.status(404).json({message: 'Fill out fields'})
})
server.put('/api/projects/:id',(req,res)=>{
    const updatedProject=req.body;
    updatedProject.description &&
    updatedProject.notes &&
    updatedProject.completed ? 
    db('projects')
        .where({'id':req.params.id})
        .update(updatedProject)
        .then(count=>res.status(200).json(count))
        .catch(err=>res.status(500).json(err)):
    res.status(404).json({message: 'Fill out fields'})
})
server.delete('/api/projects/:id',(req,res)=>{
    db('projects')
        .where({'id':req.params.id})
        .del()
        .then(count=>res.status(200).json(count))
        .catch(err=>res.status(500).json(err));
})
server.get('/api/actions',(req,res)=>{
    db('actions')
        .then(response=>res.status(200).json(response))
        .catch(err=>res.status(500).json(err));
})
server.get('/api/actions/:id',(req,res)=>{
    db('actions')
        .where({'id':req.params.id})
        .then(response=>res.status(200).json(response))
        .catch(err=>res.status(500).json(err))
})
server.post('/api/actions',(req,res)=>{
    const action=req.body;
    action.name &&
    action.description &&
    action.complete &&
    action.project_id ?
    db.insert(action)
        .into('actions')
        .then(count=>res.status(201).json(count))
        .catch(err=>res.status(500).json(err)):
    res.status(404).json({error:'Fill out fields'})
})
server.put('/api/actions/:id',(req,res)=>{
    const updatedAction=req.body;
    updatedAction.name &&
    updatedAction.description &&
    updatedAction.complete &&
    updatedAction.project_id ?
    db('actions')
        .where({'id':req.params.id})
        .update(updatedAction)
        .then(count=>res.status(200).json(count))
        .catch(err=>res.status(500).json(err)):
    res.status(404).json({error:'Fill out fields'})
})
server.delete('/api/actions/:id',(req,res)=>{
    db('actions')
        .where({'id':req.params.id})
        .del()
        .then(count=>res.status(200).json(count))
        .catch(err=>res.status(500).json(err))
})
const port=9000;
server.listen(port,()=>console.log('Engines firing server starting new horizons venturing.'));