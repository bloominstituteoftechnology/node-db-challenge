const express = require('express');
const db = require('../controllers/contextController');
const contextRouter = express.Router();

contextRouter.get('/', (req, res) => {
  db
    .getAll()
    .then(context => {
      if(context) {
        res.status(200).send(context);
      } else {
        res.status(404).send({ msg: 'There doesn\'t appear to be any context to display' });
      }
    }).catch(err => {
      res.status(500).send({ error: 'Error retrieving context', err });
    })
});

module.exports = contextRouter;