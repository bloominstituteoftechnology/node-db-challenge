const express = require('express');
const actionsModel = require('../data/helper/actionsModel.js');

const router = express.Router();

// end points
router.get('/', (req, res) => {
  res.status(200).send('action routes working');
});

router.post('/', (req, res) => {
  // post end point for actions
});

module.exports = router;
