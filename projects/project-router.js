const express = require('express');
const Projects = require('./project-model');

const router = express.Router();

router.get('/', (req, res) => {
  Projects.findProject()
    .then(project => {
      res.status(200).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.messasge});
    });
});

router.post('/', (req, res) => {
  const data = req.body;

  Projects.addProject(data)
    .then(project => {
      res.status(201).json({data: project});
    })
    .catch(err => {
      res.status(500).json({message: err.message});
    });
});

module.exports = router;
