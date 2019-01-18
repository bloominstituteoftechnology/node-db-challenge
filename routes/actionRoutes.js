const express = require('express');
const actionsModel = require('../data/helper/actionsModel.js');

const router = express.Router();

// end points
router.get('/', (req, res) => {
  actionsModel.getAction()
  .then(actions => {
    res.status(200).json(actions)
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

router.post('/:id', (req, res) => {

  const {id: project_id} = req.params;
  const {description, notes} = req.body;

  actionsModel.createAction({project_id, description, notes})
  .then(action => {
    res.status(201).json(action);
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

router.put('/:id', (req, res) => {

  const {id} = req.params;
  const {description, notes, completed} = req.body;

  actionsModel.update(id, {description, notes, completed})
  .then(action => {
    res.status(201).json(action);
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  actionsModel.remove(id)
  .then(count => {
    res.status(204).end();
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});


module.exports = router;
