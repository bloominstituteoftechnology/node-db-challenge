const express = require('express')
const db = require('./actionsModels.js')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    db.getActions()
      .then(actions => res.status(201).json(actions))
      .catch(err => res.status(500).json({ error: 'The actions could not be retrieved.' }))
  })
  .post((req, res) => {
    const action = req.body
    db.addAction(action)
      .then(newAction => res.status(201).json(newAction))
      .catch(err => res.status(500).json({ error: 'The action could not be added.' }))
})

module.exports = router
