const express = require('express');
const router = express.Router();
const db = require('./models/action_models');


// post to actions

router.post('/', (req, res) => {
  const { description, notes, completed } = req.body;
  const action = { description, notes, completed };
  db.addAction(action)
    .then(complete => res.status(201).json(complete))
    .catch(err => res.status(500).json(err.message));
});

// get actions

router.get('/', (req, res) => {
  db.getActions()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err.message));
});
module.exports = router;
