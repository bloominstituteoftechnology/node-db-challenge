const express = require('express');
const db = require('./data/dbconfig');
const cors = require('cors');

const server = express()
const PORT = process.env.PORT || 6050;

server.use(
  cors(),
  express.json()
)


server.post('/api/projects', (req, res) => {
  const newProject = req.body;

  return db('projects').insert(newProject)
    .then( project => {
      res.status(201).json({message: `succesfully created project`})
    }).catch( err => {
      res.status(500).json({message: 'unable to create a new project'})
    });
})

server.post('/api/projects/:id/actions', (req, res) => {
  const { id } = req.params;
  const newAction = req.body;

  return db('actions').insert({project_id: id, ...newAction})
    .then(action => {
      res.status(201).json({message: 'sucessfully created a new action for project'})
    }).catch( err => {
      res.status(500).json({message: 'unable to create action'})
    })
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})