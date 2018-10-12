const express = require('express');

const actions = require('./actionModel.js')

const router = express.Router()

router.get('/', (req,res) => {
  actions.find()
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
  actions.findById(id)
    .then(action => {
      res.status(201).json(action)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  const { notes, description } = req.body
  const project = { notes, description }
  actions.insert(project)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err.message)
    })
})


module.exports = router;
