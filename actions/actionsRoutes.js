const express = require('express');

const actions = require('./actionsModel.js');

const router = express.Router();

router.post('/', (req, res) => {
    const action = req.body;
    actions
      .add(action)
      .then(response => {
        res.status(201).json(response);
        // res.status(201).json(response[0]);
      })
      .catch(err => {
        res.status(500).json(err.message);
      });
});

module.exports = router;