const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());


server.post('/api/projects', (req, res) => {
    const project = req.body; 
    db.insert(project).into('projects')
    .then(id => {
        res.status(201).json(id); 
    })
    .catch(err => 
        res.status(500).json({error: "The project could not be posted."}));
  });

  server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(201).json(projects); 
    })
    .catch(err => 
        res.status(500).json({error: "The projects could not be retrieved."}));
  })
  
  server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;  
    db('projects', 'actions')
    .join('actions', 'actions.project_id', '=', 'projects.id')
    .where('projects.id', id)
    .then(projects => {
        console.log(projects)
        res.status(201).json(projects);
    })
    .catch(err => 
        res.status(500).json({error: "Project by that ID could not be retrieved."}));
  })

  server.put('/api/projects/:id', (req, res) => {
    const [id, body] = [req.params.id, req.body]; 
    db('projects')
    .where('id', id)
    .update('name', body.name)
    .then(projects => {
        res.status(201).json(projects);
    })
    .catch(err => 
        res.status(500).json({error: "Project by that ID could not be updated."}));
  })  

  server.delete('/api/projects/:id', (req, res) => {
    const id = req.params.id; 
    db('projects')
    .where('id', id)
    .del()
    .then(projects => {
        res.status(201).json(projects);
    })
    .catch(err => 
        res.status(500).json({error: "Project by that ID could not be deleted."}));
  })



const port = 7300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});