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

router.route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    actions.getById(id)
      .then(action => {
        if (!action || action < 1) {
          return errHelper(404, 'No record found,', res);
        } else {
          return res.status(200).json(action);
        }
      })
      .catch(err => errHelper(500, 'Error getting action.', res))
  })
  .put((req, res) => {
    const { id } = req.params;
    const { description, notes, project_id } = req.body;
    const edits = { description, notes, project_id }
    actions.update(id, edits)
      .then(edits => res.status(200).json(edits))
      .catch(err => errHelper(500, 'Error editing action.', res))
  })
  .delete((req, res) => {
    const { id } = req.params;
    actions.remove(id)
      .then(removed => {
        console.log('\n--- Action Removed', removed);
        res.json({ Success: 'Project removed' })
      })
      .catch(err => errHelper(500, 'Error removing action.', res))
  })

module.exports = router;