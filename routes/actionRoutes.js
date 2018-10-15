const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

router.get('/', (req, res) => { // view all actions from db 'actions'
  db('actions')
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err))
})

router.post("/", (req, res) => {
  const action = req.body;
  if (!req.body.description) {
    return res.status(400).json({ message: `ERROR: You must provide a name to submit an action.` });
  }
  if (!req.body.project_id) {
    return res.status(400).json({ message: `ERROR: You must provide a project_id to submit an action.` });
  }
  db.insert(action)
    .into("actions")
    .then(newAction => {
      res.status(201).json(newAction);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;