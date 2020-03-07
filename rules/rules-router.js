const express = require('express');
const db = require('./rules-model');
const router = express.Router();

// GET REQUESTS
router.get('/', (req, res) => {
    db.getProjects()
        .then(projects => {
            projects.map(project => {
                project.project_completed = project.project_completed === true;
            });
            res.status(200).json(projects);
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "Unable to access DB"});
        });
});

router.get('/:id/tasks', (req, res) => {
    db.getTasks(req.params.id)
    .then(tasks => {
        tasks.map(task => {
            task.task_completed = task.task_completed === true;
        });
        res.status(200).json(tasks);
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "Unable to find project"});
    });
});

router.get('/resources', (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "Unable to access DB"});
    });
});

// POSTS REQUESTS
router.post('/', (req, res) => {
    const proj = req.body;
    db.addProject(proj)
    .then(() => {
        db.getProjects()
        .then(projects => {
            projects.map(project => {
                project.project_completed = project.project_completed === true;
            });
            res.status(200).json(projects);
        })
        .catch(() => {
            res.status(500).json({ errorMessage: "Unable to access DB"});
        });
    })
    .catch(() => {
        res.status(500).json({ errorMessage: "Unable to post the project"});
    });
});

router.post('/:id/tasks', (req, res) => {
    const task = req.body;
    task.project_id = req.params.id;
    db.addTask(task)
      .then(() => {
        db.getTasks(req.params.id)
          .then(tasks => {
            tasks.map(task => {
              task.task_completed = task.task_completed === true;
            });
            res.status(200).json(tasks);
          })
          .catch(() => {
            res.status(500).json({ errorMessage: "Unable to find project" });
          });
      })
      .catch(() => {
        res.status(500).json({ errorMessage: "Unable to post the task" });
      });
  });
  
  router.post('/resources', (req, res) => {
    const resource = req.body;
    db.addResource(resource)
      .then(() => {
        db.getResources()
          .then(resources => {
            res.status(200).json(resources);
          })
          .catch(() => {
            res.status(500).json({ errorMessage: "Unable to access DB" });
          });
      })
      .catch(() => {
        res.status(500).json({ errorMessage: "Unable to post the resource" });
      });
  });
  
  module.exports = router; 