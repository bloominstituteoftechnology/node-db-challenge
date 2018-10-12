const express = require('express');

const projects = require('./projectModel.js')

const router = express.Router()

router.get('/', (req,res) => {
  projects.find()
    .then(table => {
      res.status(200).send(table)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err)
    })
})

router.get('/:id', (req,res) => {
  const { id } = req.params
  projects.findById(id)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const { name, description } = req.body
  const project = { name, description }
  projects.insert(project)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err.message)
    })
})


module.exports = router;
