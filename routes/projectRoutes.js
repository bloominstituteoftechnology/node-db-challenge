const express = require('express');
const router = express.Router();
const helpers = require('../data/helpers');

router.get('/', (req, res, next) => {
  helpers
    .getProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(next);
});

module.exports = router;
