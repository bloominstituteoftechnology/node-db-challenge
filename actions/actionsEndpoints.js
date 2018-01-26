const express = require('express');

const repository = require('./actionsRepository');

const actionsRouter = express.Router();

actionsRouter.get('/', function(req, res) {
  repository
    .get()
    .then(function(records) {
      res.status(200).json(records);
    })
    .catch(function(err) {
      res.status(500).json({ error: 'Could not retrieve actions' });
    });
});

module.exports = actionsRouter;
