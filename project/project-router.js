const express = require('express');
const Project = require('./project-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Project.find()
    .then(proj => {
      res.json(proj);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


//   ------------------------------------------------------------------------------
router.get('/:id', (req, res) => {
    const { id } = req.params;
    Project.findById(id)
    .then(proj => {
      if (proj) {
        res.json(proj);
      } else {
        res.status(404).json({ message: 'Could not find project with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'This is a massive failure bud, this is the cyberTruck' });
    });
  });
// ------------------------------------------------------------------------------
router.get('/:id/project', (req, res) => {
  const { id } = req.params;

  Project.findProj(id)
  .then(proj => {
    if (proj.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get proj' });
  });
});

// ------------------------------------------------------------------------------
router.post('/:id/project', (req, res) => {
  const projData = req.body;

  Project.add(projData)
  .then(proj => {
    res.status(201).json(proj);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to post to project' });
  });
});


// ------------------------------------------------------------------------------
router.get('/:id/resources', (req, res) => {
    const { id } = req.params;

    Project.findResources(id)
    .then(reso => {
      if (reso.length) {
        res.json(reso);
      } else {
        res.status(404).json({ message: 'Could not find resource' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get resource' });
    });
  });


// ------------------------------------------------------------------------------
router.post('/:id/resources', (req, res) => {
    const resPost = req.body;

    Project.add(resPost)
    .then(post => {
        res.status(201).json(post);
    })
      .catch(err => {
          res.status(500).json({message:"Did not post bud."});
      });
    });
    // ------------------------------------------------------------------------------

    router.get('/:id/task', (req, res) => {
      const { id } = req.params;
  
      Project.findTask(id)
      .then(task => {
        if (task.length) {
          res.json(steps);
        } else {
          res.status(404).json({ message: 'Could not find task' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get task' });
      });
    });
 // ------------------------------------------------------------------------------
    router.post('/:id/task', (req, res) => {
      const taskPost = req.body;
  
      Project.add(taskPost)
      .then(post => {
          res.status(201).json(post);
      })
        .catch(err => {
            res.status(500).json({message:"Did not post bud."});
        });
      });
// ------------------------------------------------------------------------------
      modules.export = router;