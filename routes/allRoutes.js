
const express = require('express')
const db = require('./access.js')
const router = express.Router()

router.route('/projects')
  .post((req, res) => {
    const project = req.body
    db.addProject(project)
      .then(newProject => res.status(201).json(newProject))
      .catch(err => res.status(500).json({ error: 'The project could not be added.' }))
  })

router.route('/actions')
  .post((req, res) => {
    const action = req.body
    db.addAction(action)
      .then(newAction => res.status(201).json(newAction))
      .catch(err => res.status(500).json({ error: 'The action could not be added.' }))
  })

module.exports = router
