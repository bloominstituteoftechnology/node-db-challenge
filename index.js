
const express = require('express');
const knex = require('knex')
const knexConfig = require('./knexfile.js')
const db = knex(knexConfig.development)
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send("hello")
})

server.get('/api/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err  => res.status(500).json(err))
})

server.get('/api/projects/:projectId', (req, res) => {
  const {projectId} = req.params
  db('projects')
    .where({id: projectId})
    .then(project => res.status(200).json(project))
    .catch(err  => res.status(500).json(err))
})
server.post('/api/projects', (req, res) => {
  const project = req.body;
    if(project || project.length) {
    db('projects')
      .insert(project)
      .then(id => res.status(201).json(id))
      .catch(err => res.status(500).json({message: "there was a problem creating the project"}))
    } else {
      res.status(500).json({message: 'The data was invalid'})
    }
})

server.post('/api/projects/:projectId/actions', (req, res) => {
  const action = req.body;
  const {projectId} = req.params;
  db('actions')
    .insert({...action, project_id: projectId})
    .then(id => res.status(201).json(id))
    .catch(err => res.status(500).json({message: "there was a problem creating the action"}))
})

server.get('/api/projects/:projectId/actions', (req, res) => {
  const {projectId} = req.params
  db.select('*').from('projects')
    .where({id: projectId})
    .then(project => {
      db.select('*')
        .from('actions')
        .where({project_id: projectId})
        .then(actions => res.status(200).json({...project[0], actions}))
    })
    .catch(err  => res.status(500).json(err))
})


const port = 3300;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
