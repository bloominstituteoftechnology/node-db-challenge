const express = require('express');

const router = express.Router();

router('/', (req, res) => {
  res.status(200).send('action routes working');
});

module.exports = router;
