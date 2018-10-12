const express = require('express');
const actions = require('./actionModels');
const router = express.Router();
const errHelper = (status, message, res) => {
  console.log('Error.')
  res.status(status).json({ Error: message });
}

router.route('/')
  .get((req, res) => {
    actions.get()
      .then(actions => res.status(200).json(actions))
      .catch(err => errHelper(500, 'Error getting actions.', res))
  })
  .post((req, res) => {
    const action = req.body
    actions.insert(action)
      .then(action => res.status(201).json(action))
      .catch(err => errHelper(500, 'Error adding actions.', res))
  })

module.exports = router;