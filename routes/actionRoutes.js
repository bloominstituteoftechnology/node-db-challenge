const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('action routes working');
});

router.post('/', (req, res) => {
  // post end point for actions
});

module.exports = router;
