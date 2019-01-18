const express = require('express');
const projectsModel = require('../data/helper/projectsModel.js');

const router = express.Router();

// end points
router.get('/', (req, res) => {
  projectsModel.getProjects()
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  projectsModel.getProject(id)
  .then(projects => {
    res.status(200).json(projects)
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});

router.post('/', (req, res) => {
  const {name, description} = req.body;
  console.log(name, description)
  projectsModel.createProject({name, description})
  .then(project => {
    res.status(201).json(project)
  })
  .catch(err => res.status(500).json({errorMessage: err}));
});


module.exports = router;