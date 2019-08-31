const express = require('express');

const Projects = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProjects()
  .then(Projects => {
    res.json(Projects);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get Projects' });
  });
});

router.get('/resources', (req, res) => {
    Projects.findResources()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

  router.get('/tasks', (req, res) => {
    Projects.findTasks()
    .then(Projects => {
      res.json(Projects);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
  });

router.post('/', (req, res) => {
  const projectData = req.body;

  Projects.addProject(projectData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Project' });
  });
});

router.post('/tasks', (req, res) => {
  const taskData = req.body;

  Projects.addTask(taskData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new Task' });
  });
});

router.post('/resources', (req, res) => {
  const resourceData = req.body;

  Projects.addResource(resourceData)
  .then(ids => {
    res.status(201).json({created: ids[0]});
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Projects.findById(id)
//   .then(Project => {
//     if (Project) {
//       res.json(Project);
//     } else {
//       res.status(404).json({ message: 'Could not find Project with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get Projects' });
//   });
// });

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   Projects.findSteps(id)
//   .then(steps => {
//     if (steps.length) {
//       res.json(steps);
//     } else {
//       res.status(404).json({ message: 'Could not find steps for given Project' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get steps' });
//   });
// });

// router.post('/', (req, res) => {
//   const ProjectData = req.body;

//   Projects.add(ProjectData)
//   .then(Project => {
//     res.status(201).json(Project);
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new Project' });
//   });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   Projects.findById(id)
//   .then(Project => {
//     if (Project) {
//       Projects.addStep(stepData, id)
//       .then(step => {
//         res.status(201).json(step);
//       })
//     } else {
//       res.status(404).json({ message: 'Could not find Project with given id.' })
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to create new step' });
//   });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Projects.findById(id)
//   .then(Project => {
//     if (Project) {
//       Projects.update(changes, id)
//       .then(updatedProject => {
//         res.json(updatedProject);
//       });
//     } else {
//       res.status(404).json({ message: 'Could not find Project with given id' });
//     }
//   })
//   .catch (err => {
//     res.status(500).json({ message: 'Failed to update Project' });
//   });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Projects.remove(id)
//   .then(deleted => {
//     if (deleted) {
//       res.json({ removed: deleted });
//     } else {
//       res.status(404).json({ message: 'Could not find Project with given id' });
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to delete Project' });
//   });
// });

module.exports = router;