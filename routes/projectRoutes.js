const express = require('express');

const router = express.Router();

router('/', (req, res) => {
  res.status(200).send('project routes working');
});

module.exports = router;