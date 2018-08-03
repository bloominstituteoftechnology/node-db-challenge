const express = require('express');
const router = express.Router();
const actions = require('../data/helpers/actionLibrary');

router.get('/', async (req, res) => {
  try {
    const allActions = await actions.get();
    return res.status(200).json(allActions);
  } catch (error) {
    return res.status(500).json({ message: "Actions could not be retrieved." });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const action = await actions.get(req.params.id);
    if (action.length === 0) {
      return res.status(404).json({ message: "Action does not exist." });
    }
    return res.status(200).json(action);
  } catch (error) {
    return res.status(500).json({ message: "Action could not be retrieved." });
  }
});

router.post('/', async (req, res) => {
  try {
    const newAction = await actions.insert(req.body);
    return res.status(201).json(newAction);
  } catch (error) {
    return res.status(500).json({ message: "Action could not be added." });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const editedAction = await actions.update(req.params.id, req.body);
    if (editedAction === 0) {
      return res.status(404).json({ message: "Action does not exist." });
    } else {
      return res.status(200).json(editedAction);
    }
  } catch (error) {
    return res.status(500).json({ message: "Action could not be edited." });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedAction = await actions.delete(req.params.id);
    if (deletedAction === 0) {
      return res.status(404).json({ message: "Action does not exist." });
    } else {
      return res.status(200).json(deletedAction);
    }
  } catch (error) {
    return res.status(500).json({ message: "Action could not be deleted." });
  }
});

module.exports = router;
