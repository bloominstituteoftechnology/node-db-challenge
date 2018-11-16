const express = require('express');

const router = express.Router();

const actionHelpers = require('../Models/ActionModel');

router.get('/', (req, res) => {
  actionHelpers
    .getActions()
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  actionHelpers
    .getActions(id)
    .then(resp => res.status(200).json(resp))
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

router.post('/', (req, res) => {
  actionHelpers
    .addActions(req.body)
    .then(id =>
      res
        .status(201)
        .json({ message: `Successfully created user with id of ${id}` })
    )
    .catch(err => res.status(500).json({ message: 'Bad Request' }));
});

module.exports = router;
