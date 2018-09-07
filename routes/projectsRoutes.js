const express = require('express')
const projectRouter = express.Router()

const db = require('../db/dbConfig')


projectRouter.get('/', (req, res) => {
  db('projects')
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json({error, message: error.message})
    })
})
projectRouter.get('/:id', (req, res) => {
  const { id } = req.params
  db('projects')
    .where({ id })
    .then(project => {
      res.status(200).json(project)
    })
    .catch(error => {
      res.status(404).json({error, message: error.message, devMessage: "Likely the id does not exist in the projects table"})
    })
})

projectRouter.post('/', (req,res) => {
  db('projects')
    .insert(req.body)
    .then(projectId => {
      res.status(201).json(projectId)
    })
    .catch(error => {
      res.status(500).json({error, errorMessage: error.message, devMessage: "Something may be wrong with the route"})
    })
})



module.exports = projectRouter; 