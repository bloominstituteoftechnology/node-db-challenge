const express = require('express');
const router = express.Router();
const db = require('./models/action_models');


// post to actions

router.post('/', (req, res) => {
  const { project_id, description, notes, completed } = req.body;
  const newAction = { project_id, description, notes, completed };
  db.addAction(newAction)
    .then(complete => res.status(201).json(complete))
    .catch(err => res.status(500).json(err.message));
});

// get actions

router.get('/', (req, res) => {
  db.getActions()
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err.message));
});

// retrieve a project by its ID

router.get('/:id', (req, res) => {
  const { id } = req.params;
   db.getActions('actions')
    .where('id', id)
    .then(action => {
      if (!action.length) {
        res
          .status(401)
          .json({ error: "Invalid ID! Please try again." })
      }
        res
          .status(200)
          .json(action)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The action could not be retrieved." })
    })
})

module.exports = router;
