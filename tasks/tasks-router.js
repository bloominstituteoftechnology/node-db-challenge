const express = require('express');

const tasks = require('./tasks-model.js');

const router = express.Router();

//  retrieving a list of tasks.
router.get('/', (req, res) => {
  tasks.findTasks()
    .then((tasksList) => {
      res.status(200).json(tasksList);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to get tasksList' });
    });
});

// returns a task with a specific id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  tasks.findTaskById(id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'problem with the db', error: err });
    });
});

//  adding tasks.
router.post('/', (req, res) => {
  const taskData = req.body;

  tasks.addTasks(taskData)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

// updates a given task
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  tasks.findTaskById(id)
    .then((task) => {
      if (task) {
        tasks.update(changes, id)
          .then((updatedtask) => {
            res.json(updatedtask);
          });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to update task' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  tasks.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find task with given id' });
      }
    })
    .catch(() => {
      res.status(500).json({ message: 'Failed to delete task' });
    });
});


module.exports = router;
