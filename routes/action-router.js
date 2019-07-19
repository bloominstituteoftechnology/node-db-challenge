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

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const action = await Actions.findById(id);

    if (action) {
      res.json(action);
    } else {
      res.status(404).json({ message: 'Could not find action with given id.' })
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Failed to get action' });
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const action = await Actions.update(id, req.body);
    if (action) {
      res.status(200).json(action);
    } else {
      res.status(404).json({ message: "No action found with that id" });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "The action information could not be modified" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await Actions.remove(id);
    if (deleted) {
      res.status(204).json(deleted);
    } else {
      res.status(404).json({ message: "No action matching that id" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "The action could not be removed" });
  }
});

module.exports = router;