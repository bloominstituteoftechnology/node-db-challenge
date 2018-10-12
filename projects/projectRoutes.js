const express = require('express');
const projects = require('./projectModels');
const actions = require('../actions/actionModels');
const router = express.Router();
const errHelper = (status, message, res) => {
  console.log('Error.')
  res.status(status).json({ Error: message });
}

router.route('/')
  .get((req, res) => {
    projects.get()
      .then(projects => res.status(200).json(projects))
      .catch(err => errHelper(500, 'Error getting projects.', res))
  })
  .post((req, res) => {
    const project = req.body
    projects.insert(project)
      .then(project => res.status(201).json(project))
      .catch(err => errHelper(500, 'Error adding projects.', res))
  })

module.exports = router;