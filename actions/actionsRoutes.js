const express = require('express');

const actions = require('./actionsModel');

const router = express.Router();

router.post('/', (req, res) => {
  const { description, notes, project_id } = req.body;
  const action = { description, notes, project_id };
  if (!description || !project_id) {
    return res.status(400).send({
      message: 'please provide a description and project_id for the action.',
    });
  }
  actions
    .add(action)
    .then((id) => {
      res.status(201).json(id);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
