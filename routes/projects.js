const express = require('express');
const router = express.Router();

const Projects = require('./resources.js');

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
      projects = projects.map((project) => {
        return {
          ...project,
          completed: !!project.completed
        }
      });
      res.status(200).json(projects)
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({message: 'Could not get all projects'})
    })
  })
  
  router.get('/:id/resources', (req, res) => { 
    Projects.findResource(req.params.id)
    .then(resources => {
      res.status(200).json(resources)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({message: 'Could not get that project ID'})
    })
  })
  
  router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
      project.completed = !!project.completed
      res.status(201).json(project)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({message: 'Could not create project'})
    })
  })
  
  router.post('/:id/resources', (req, res) => {
    Projects.insertResource(req.params.id, req.body)
      .then(resource => {
        res.status(201).json(resource)
      })
      .catch((error) => {
        console.log(error)
        res.status(500).json({message: 'Could not create that resource'})
      })
  })
  
  module.exports = router;