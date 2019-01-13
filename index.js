const express = require('express');
const server = express();
const PORT = process.env.PORT || 5001;
server.use(express.json());
const db = require('./data/db')

//POST for adding project

server.post('/api/projects', (req,res) => {
const project = req.body;
db.addProject(project)
  .then(project => res.status(201).json(`sucessfully inserted project with an id of ${project}`))
  .catch(err => res.status(500).json({error:'failed to insert your project'}) )
});

// POST for adding actions

server.post('/api/actions', (req, res) => {
  const action = req.body;
  db.addAction(action)
    .then(id => res.status(201).json(`sucessfully inserted action with an id of ${id}`))
    .catch(err => res.status(500).json({ error: 'failed to insert your action' }))
});

//GET for retrieving a project by its id that returns an object(See Readme For Details)

server.get('/api/projects/:id', (req,res) => {
  const {id} = req.params;
  db.getProjectByID(id)
    .then(project => {
      db.getActionsByID(id)
      .then(action =>{
        action = {project,action}
        res.json(action)
      })
    })
    .catch(err => res.status(500).json(err))})

server.listen(PORT, () => {
  console.log(`server is up and running on ${PORT}`)
})