const express = require('express');
const actionsModel = require('../data/helper/actionsModel.js');

const router = express.Router();

// end points
router.get('/', (req, res) => {
  res.status(200).send('action routes working');
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

module.exports = router;
