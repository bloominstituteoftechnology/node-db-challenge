const express = require('express');

const tasks = require('../helpers/taskModel.js');

const router = express.Router();

router.get('/', (req, res) => {
  tasks.find()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks', err });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  tasks.findById(id)
  .then(task => {
    if (task) {
      res.json(task);
    } else {
      res.status(404).json({ message: 'Could not find task with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    tasks.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete task' });
    });
  });

  module.exports = router;