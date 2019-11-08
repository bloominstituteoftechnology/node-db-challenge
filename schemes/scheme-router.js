const express = require('express');

const Schemes = require('./scheme-model.js');

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

router.get('/resources', (req, res) => {
  Schemes.findRes()
  .then(schemes => {
    res.json(schemes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get schemes' });
  });
});


router.get('/resources/:id', (req, res) => {
  const { id } = req.params;

  Schemes.findResById(id)
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

router.get('/projects/:id/tasks', (req, res) => {
  const { id } = req.params;

  Schemes.getTasks(id)
  .then(steps => {
    if (steps.length) {
      const pro = steps.map(e => ({...e, completed: Boolean(e.completed)}))
      res.json(pro);
    } else {
      res.status(404).json({ message: 'Could not find tasks for given project' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get tasks' });
  });
});

router.post('/projects', (req, res) => {
  const schemeData = req.body;

  Schemes.add(schemeData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new project' });
  });
});


router.post('/resources', (req, res) => {
  const schemeData = req.body;

  Schemes.addRes(schemeData)
  .then(scheme => {
    res.status(201).json(scheme);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new resource' });
  });
});

router.post('/projects/:id/tasks', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  stepData.completed = stepData ? 1 : 0;
  stepData.project_id = id;

  Schemes.addTask(stepData)
  .then(scheme => {
    if (scheme) {
      Schemes.addTask(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find project with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new task' });
  });
});

router.put('/projects/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Schemes.findById(id)
  .then(scheme => {
    if (scheme) {
      Schemes.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update scheme' });
  });
});

router.delete('/projects/:id', (req, res) => {
  const { id } = req.params;

  Schemes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find scheme with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete scheme' });
  });
});

module.exports = router;