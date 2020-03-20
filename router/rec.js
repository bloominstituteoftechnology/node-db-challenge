const express = require('express')

const router = express.Router()

const DB_resources = require('../data/DBAccess.js')

router.get('/', (req, res) => {
  DB_resources.getRecources()
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch Resources' })
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  DB_resources.getRecource(id)
    .then(resource => {
      res.status(200).json(resource)
    })
    .catch(() => {
      res.status(500).json({ message: 'Unable to fetch resource' })
    })
})

router.post('/', (req, res) => {
  const resource = req.body
  DB_resources.postRecource(resource)
    .then(resource => {
      res.status(201).json({ message: 'Successfully added resource', resource: resource })
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to add new resource' })
    })
})

module.exports = router