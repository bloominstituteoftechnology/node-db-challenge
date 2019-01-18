const express = require('express');
const projectsModel = require('../data/helper/projectsModel.js');

const router = express.Router();

// end points
router.get('/', (req, res) => {
  res.status(200).send('project routes working');
});
router.get('/:id', (req, res) => {
  res.status(200).send('project routes working');
});

router.post('/', (req, res) => {
  // post end point for projects
});


module.exports = router;