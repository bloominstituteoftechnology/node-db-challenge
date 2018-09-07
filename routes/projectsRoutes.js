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



module.exports = projectRouter; 