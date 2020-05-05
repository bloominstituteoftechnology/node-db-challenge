const express = require('express');

const Schemes = require('./project-model.js');

const router = express.Router();

router.get('/projects', (req, res) => {
  Schemes.find()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});

router.get('/projects/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      res.json(scheme);
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});


router.get('/resources/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findResourceById(id)
  .then(resource => {
    if (resource) {
      res.json(resource);
    } else {
      res.status(404).json({ message: 'Could not find resource with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.get('/projects/:id/resources', (req, res) => {
  const { id } = req.params
  // const resources = db("project_resource")
  //   .join("project", "project_id", "project_resource_id")
  //   .join("resource", "resource_id", "project_resource_id")
  //   .where("project.id", req.params.id)
  //   .select("project.*", "resource.*")
    Schemes.findResourcesByProject(id)
  .then(resources => {
    if (resources.length) {
      res.json(resources);
    } else {
      res.status(404).json({ message: 'Could not find resources for given project' })
    }
  })
  // res.json(resources)
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});


// router.get('/projects/:id/tasks', (req, res) => {
//   const { id } = req.params;

//   Schemes.findTasksByProject(id)
//   .then(tasks => {
//     if (tasks.length) {
//       res.json(tasks);
//     } else {
//       res.status(404).json({ message: 'Could not find tasks for given project' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get tasks' });
//   });
// });

// router.get('/:id/resources', (req, res) => {
//   const { id } = req.params;

//   Schemes.findResources(id)
//   .then(resources => {
//     if (resources.length) {
//       res.json(resources);
//     } else {
//       res.status(404).json({ message: 'Could not find resources for given scheme' })
//     }
//   })

//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get resources' });
//   });
// });

// router.get('/resources', (req, res) => {
//   const { id } = req.params;

//   Schemes.findResources(id)
//   .then(resources => {
//     if (resources.length) {
//       res.json(resources);
//     } else {
//       res.status(404).json({ message: 'Could not find resources for given scheme' })
//     }
//   })

//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get resources' });
//   });
// });

router.get('/tasks', (req, res) => {
  Schemes.findTasks()
  .then(tasks => {
    res.json(tasks);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.get('/resources', (req, res) => {
  Schemes.findResources()
  .then(resources => {
    res.json(resources);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get resources' });
  });
});

router.post('/projects', (req, res) => {
  if(!req.body.project_name){
    return res.status(404).json({
      message: "Project needs a name"
    })
  }
  const schemeData = req.body;

  Schemes.add(schemeData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new scheme' });
  });
});

router.post('/resources', (req, res) => {
  if(!req.body.resource_name){
    return res.status(404).json({
      message: "Resource needs a name"
    })
  }
  const schemeData = req.body;

  Schemes.addResource(schemeData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.post('/projects/:id/tasks', (req, res) => {
  if(!req.body.project_id){
    return res.status(404).json({
      message: "Task needs a project id"
    })
  }
  const schemeData = req.body;

  Schemes.addTask(schemeData)
  .then(resource => {
    res.status(201).json(resource);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.get('/projects/:id/tasks', (req, res) => {
  console.log(req.params.id)

  Schemes.findTasksByProject(req.params.id)
  .then(task => {
    console.log(task)
    res.status(201).json(task);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get task' });
  });
});

// router.post('/:id/resources', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params; 

//   Schemes.findById(id)
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

//   Schemes.findById(id)
//   .then(scheme => {
//     if (scheme) {
//       Schemes.update(changes, id)
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

//   Schemes.remove(id)
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



