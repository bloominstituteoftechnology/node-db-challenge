const express = require('express');

const { Actions } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const action = await Actions.find();
    res.status(200).json(action);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Actions could not be retrieved' })
  }
});

router.post('/', async (req, res) => {
  const actionData = req.body;

  try {
    const action = await Actions.add(actionData);
    res.status(201).json(action);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new action' });
  }
});

module.exports = router;