const express = require('express');

const Projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    Projects.get()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessage: 'Failed to get projects from database.' });
    });
  });

  router.post('/', (req, res) => {
      Projects.add(req.body)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(err => {
          console.log(err)
          res.status(500).json({ errorMessage: 'Failed to post project to database.'});
      });
  });

  router.post('/:id/tasks', validateProjectId, (req, res) => {
      Projects.addTask(req.body)
      .then(task => {
          res.status(200).json(task);
      })
      .catch(err => {
          console.log(err)
          res.status(500).json({ errorMessage: 'Error posting task to database.'});
      });
  });

  router.post('/:id/resources', validateProjectId, (req, res) => {
    Projects.addResource(req.body)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ errorMessage: 'Error posting resource to database.'});
    });
});

  router.get('/:id', validateProjectId, (req, res) => {
      Projects.getProjectById(req.params.id)
      .then(project => {
          res.status(200).json(project);
      })
      .catch(err => {
          console.log(err);
          res.status(500).json({ errorMessage: 'Failed to retrieve project from database.'});
      });
  });

  router.get('/:id/stretch', validateProjectId, (req, res) => {
    Projects.getProjectByIdStretch(req.params.id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ errorMessage: 'Failed to retrieve project from database.'});
    });
});

  router.get('/:id/tasks', validateProjectId, (req, res) => {
    Projects.getTasks(req.params.id)
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ errorMessage: 'Failed to retrieve tasks from database.' });
    });
  });



  router.get('/:id/resources', validateProjectId, (req, res) => {
    Projects.getResources(req.params.id)
    .then(resources => {
      res.json(resources);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ errorMessage: 'Failed to get resources from database.' });
    });
  });


// custom middleware

function validateProjectId(req, res, next) {
    let id = req.params.id;
    Projects.getProjectById(id)
      .then(project => {
        !project
          ? res.status(404).json({ errorMessage: "Invalid project ID." })
          : next();
      })
      .catch(err => {
        console.log(err)
      })
  };


  module.exports = router;