const express = require('express');
const data = require('./data-model');

const router = express.Router();

router.get('/projects', (req, res) => {
    data.find()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });

  
  router.post('/projects', (req, res) => {
    const projectData = req.body;
  
    data.addProject(projectData)
    .then(added => {
      res.status(201).json(added);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });
  



// posting resources
  router.post('/:id/resources', (req, res) => {
    const resData = req.body;
    const { id } = req.params; 
  
    Schemes.findByResId(id)
    .then(res => {
      if (res) {
        data.addResource(resData, id)
        .then(added => {
          res.status(201).json(added);
        })
      } else {
        res.status(404).json({ message: 'Could not find resource with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new resource' }, err);
    });
  });
// getting resources
  router.get('/:id/resources', (req, res) => {
    const { id } = req.params;
    data.findByResId(id)
    .then(reso => {
        if (reso.length) {
          res.json(reso);
        } else {
          res.status(404).json({ message: 'Could not find resources for given project' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get resources' }, err);
      });
    });
// ----------------
// adding/posting tasks
router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const { id } = req.params; 
  
    Schemes.findByTaskId(id)
    .then(tk => {
      if (tk) {
        data.addTask(taskData, id)
        .then(added => {
          res.status(201).json(added);
        })
      } else {
        res.status(404).json({ message: 'Could not find task with given id.' })
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new task' }, err);
    });
  });
// getting tasks
  router.get('/:id/resources', (req, res) => {
    const { id } = req.params;
    data.findByTaskId(id)
    .then(tk => {
        if (tk.length) {
          res.json(tk);
        } else {
          res.status(404).json({ message: 'Could not find task for given project' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Failed to get task' }, err);
      });
    });





  module.exports = router;