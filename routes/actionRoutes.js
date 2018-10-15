const express = require('express');
const router = express.Router();
const actions = require('./actionModel')

router.get('/', (req, res) => { // view all actions from 'actions' table
  actions.find()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err))
})

router.post('/', (req, res) => { // add action to db 'actions'
  const action = req.body;
  if (!req.body.description) {
    return res.status(400).json({ message: `ERROR: You must provide a description to submit an action.` });
  }
  if (!req.body.project_id) {
    return res.status(400).json({ message: `ERROR: You must provide a project_id to submit a action.` });
  }
  actions.add(action)
    .then(([newAction]) => {
      res.status(201).json(newAction);
    })
    .catch(err => {
      if (err.errno = 19) {
        res.status(500).json({ message: `ERROR: Unique 'name' required.` });
      } else {
        res.status(500).json(err);
      }
    });
});

router.put('/:id', (req, res) => { // update action by id paremeter
  const { id } = req.params;
  const changes = req.body;
  actions.update(id, changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err))
})

router.delete('/:id', (req, res) => { // delete action by id parameter
  const { id } = req.params;
  actions.remove(id)
    .then(count => {
      if (!count || count < 1) {
        res.status(404).json({ message: 'No records found to delete.' });
      } else {
        res.status(200).json(count);
      };
    });
});

module.exports = router;