// projectsRoutes.js
const express = require('express')

const db = require('../data/dataHelpers.js')

const router = express.Router();

const addProjectEP = (req, res) => {
  const project = req.body;

  db.addProject(project)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json(error)
    });
}

const getProjectActionsEP = (req, res) => {
  const { id } = req.params

  db.getProjectActions(id)
    .then(project => res.status(200).json(project))
    .catch(err => res.status(500).json(err) )
}

const echo = (req, res) => {
  res.status(200).json({
    message: 'hey this endpoint work!',
    params: req.params,
    query: (req.query ? req.query : ''),
    body: req.body
  });
}

router.post('/', addProjectEP);
router.get('/:id', getProjectActionsEP);

module.exports = router;
