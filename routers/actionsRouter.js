const express = require('express');
const router = express.Router();
const db = require('../dbConfig');

router.post('/', (req, res) => {
  const action = req.body;
  !action
    ? res
        .status(401)
        .json({ error: 'Check the submitted information and try again.' })
    : db('actions')
        .insert(action)
        .then(ids => res.status(201).json(ids[0]))
        .catch(err => res.status(500).json({ err }));
});

module.exports = router;
