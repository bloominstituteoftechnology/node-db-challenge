const express = require('express');

const db = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
  db.getProjects()
    .then(projects => {
      projects.map(project => {
        project.project_completed = project.project_completed === true;
      });
      res.status(200).json(projects);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
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
    res.status(500).json({ errorMessage: "Unable to locate project" });
  });
});

router.get('/resources', (req, res) => {
  db.getAllResources()
    .then(resources => {
      res.status(200).json(resources);
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to access database" });
    });
});

router.post('/', (req, res) => {
  const project = req.body;
  db.addProject(project)
    .then(() => {
      db.getProjects()
        .then(projects => {
          projects.map(project => {
            project.project_completed = project.project_completed === true;
          });
          res.status(200).json(projects);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to access database" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add project" });
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
          res.status(500).json({ errorMessage: "Unable to locate project" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add task" });
    });
});

router.post('/resources', (req, res) => {
  const resource = req.body;
  db.addResource(resource)
    .then(() => {
      db.getAllResources()
        .then(resources => {
          res.status(200).json(resources);
        })
        .catch(() => {
          res.status(500).json({ errorMessage: "Unable to access database" });
        });
    })
    .catch(() => {
      res.status(500).json({ errorMessage: "Unable to add resource" });
    });
});

module.exports = router;