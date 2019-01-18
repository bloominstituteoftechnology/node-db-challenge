const express = require('express');

const router = express.Router();

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