const express = require('express');
const cors = require('cors');
const projectDB = require('./data/helpers/projectModel')
const actionDB = require('./data/helpers/actionModel')

const server = express()
const PORT = process.env.PORT || 6050;

server.use(
  cors(),
  express.json()
)


server.post('/api/projects', (req, res) => {
  const newProject = req.body;

    projectDB.post(newProject)
    .then( project => {
      res.status(201).json({message: `succesfully created project`})
    }).catch( err => {
      res.status(500).json({message: 'unable to create a new project'})
    });
})

server.post('/api/projects/:id/actions', (req, res) => {
  const { id } = req.params;
  const action = req.body;
  const newAction = {project_id: id, ...action}

    actionDB.postAction(newAction)
    .then(action => {
      res.status(201).json({message: 'sucessfully created a new action for project'})
    }).catch( err => {
      res.status(500).json({message: 'unable to create action'})
    })
})

server.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  projectDB.get(id)
  .then( project => {
      res.status(200).json(project)
  }).catch( err => {
    res.status(400).json({message: "cannot get project, please try again"})
  })
})

server.get('/api/actions/:id', (req, res) => {
  const { id } = req.params;

  projectDB.getProjectActions(id)
    .then( actions => {
      res.status(200).json(actions)
    }).catch( err => {
      res.json({message: 'unable to get the actions for this project'})
    })
})

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})