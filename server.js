const express = require('express');
const helmet = require('helmet');
const db = require('./data/db');

const port = 8000;
const server = express();

server.use(helmet());
server.use(express.json());
// server.use(cors({ origin: "http://localhost:3000" })) <-- don't need for now

server.listen(port, () => console.log(`Server is listening port ${port}`));

server.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>');
})

server.get('/projects', (req, res) => { 
    db('project').then(p => { res.status(200).json(p) })
 })
server.get('/projects/:id', (req, res) => { 
    const { id } = req.params;
    db('project').where({ id }).then(p => { res.status(200).json(p) })
 })
server.post('/projects/', (req, res) => { 
    const project = req.body;
    if(project.name && project.description) {
        db('project')
             .insert(project)
             .then(p =>  {
                 const id = p[0]
                 res.status(200).json({ id, ...project })
             })             
             .catch(error => res.json(error))
             
    } else {
        res.status(400).json({ message: 'Please provide both a name and description for the project' })
    }
 })
server.delete('/projects/:id', (req, res) => { // needs some fix (delete is working, needs proper error handling)
    const { id } = req.params;
    db('project')
     .where({ id })
     .del()
     .then(ids => {
        const id = ids[0]
        if(!id) {
            res.status(404).json({ error: 'The project with specified ID does not exist'})
        }
        res.status(200).json(id, { message: 'The project has been deleted' });
    })
     .catch(error => res.status(500).json(error))
 })
 server.put('/projects/:id', (req, res) => { // needs some fix (put is working, needs proper error handling)
    const { id } = req.params;
    const p = req.body;
    if(!p){
        res.status(400).json({ error: 'Please provide both a project name and description' })
    } 
    db('project')
    .where({ id })
     .update(p)
     .then(p => {
        const id = p[0]
        if (!ids) {
                res.status(404).json({ error: 'The project with specified ID does not exist' })
            } else {
                res.status(200).json(id)
            }
     })
     .catch(err => {
        res.status(500).json(err);
      });
})

// ****** action ******
server.get('/actions', (req, res) => { 
    db('action').then(p => { res.status(200).json(p) })
    .catch(err => res.status(500).json({errorMessage: err }));
 })
server.get('/actions/:id', (req, res) => { 
    const { id } = req.params;
    db('action').where({ id }).then(p => { res.status(200).json(p) })
 })
server.post('/actions/', (req, res) => { 
    const { project_id, description, notes } = req.body;
    const action = { project_id, description, notes } ;
    if(action) {
        db('action')
             .insert(action)
             .then(p =>  {
                 const id = p[0]
                 res.status(200).json({ id, ...action })
             })             
             .catch(error => res.json(error))
             
    } else {
        res.status(400).json({ message: 'Please provide notes, description, and project_id for the action' })
    }
 })
server.delete('/actions/:id', (req, res) => { // needs some fix (delete is working, needs proper error handling)
    const { id } = req.params;
    db('action')
     .where({ id })
     .del()
     .then(ids => {
        const id = ids[0]
        if(!id) {
            res.status(404).json({ error: 'The action with specified ID does not exist'})
        }
        res.status(200).json(id, { message: 'The action has been deleted' });
    })
     .catch(error => res.status(500).json(error))
 })
 server.put('/actions/:id', (req, res) => { // needs some fix (put is working, needs proper error handling)
    const { id } = req.params;
    const p = req.body;
    if(!p){
        res.status(400).json({ error: 'Please provide action notes, project_id and description' })
    } 
    db('action')
    .where({ id })
     .update(p)
     .then(p => {
        const id = p[0]
        if (!ids) {
                res.status(404).json({ error: 'The action with specified ID does not exist' })
            } else {
                res.status(200).json(id)
            }
     })
     .catch(err => {
        res.status(500).json(err);
      });
})

