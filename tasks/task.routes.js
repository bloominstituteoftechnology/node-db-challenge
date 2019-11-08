const express = require('express');

const tasks = require('./task-model');

const router = express.Router();

router.get('/', (req, res) => {
    tasks.find()
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get task' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  tasks.findById(id)
  .then(project => {
    if (project) {
      res.json(project);
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get project' });
  });
});

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   projects.findSteps(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given scheme' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });

router.post('/', (req, res) => {
  const taskData = req.body;

  tasks.add(taskData)
  .then(task => {
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   projects.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes.addStep(stepData, id)
//       .then(step => {
//         res.status(201).json(step);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   projects.findById(id)
//   .then(scheme => {
//     if (scheme) {
//         projects.update(changes, id)
//       .then(updatedScheme => {
//         res.json(updatedScheme);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update scheme' });
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   projects.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find scheme with given id' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete scheme' });
//   });
// });

module.exports = router;