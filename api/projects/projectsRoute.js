const express = require('express');
const router = express.Router();
const projects= require('./projectsModel.js');


// endpoints here for the zoo

//POST /api/projects
router.post('/', async (req, res) => {
    try {
      const project = req.body;
      if(project.name.length > 0){
        const newProject = await projects.addProject(project);
        res.status(200).json(newProject);
      } else {
        res.status(404).json({message: "Please enter the name of the project"});
      }
    }
    catch (err) {
      res.status(500).json({message: "There was an error while trying to save a project to the data base"});
    }
  });

  //GET /api/projects/:id
  router.get('/:projectId', async (req, res) => {
    try {
      const {projectId} = req.params;
      const projectById = await projects.findProjectById(projectId);
      if(projectById){
        res.status(200).json(projectById);
      } else {
        res.status(404).json({message: "Please provide the correct ID of the project"})
      }
    }
    catch (err){
      res.status(500).json({message: "There was an error while trying to retrieve a project from the data base"});
    }
  });  

  module.exports = router;
  