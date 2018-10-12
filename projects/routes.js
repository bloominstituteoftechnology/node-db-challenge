const express = require('express');
const db = require('./db.js');

const router = express.Router();


//Gets the projects and actions
router.get('/api/projects/:id', (req, res) => {
  const { id } = req.params;

  db.getProject(id)
    // .then(response => console.log(response))
  	.then(response => {
      res.status(200).json(response)
    })
    .catch(err => res.status(400).json({ error: "No project with that id."}))
});

//Adds a project
router.post('/api/projects', (req, res) => {
  const newProject = req.body;
  
  db.addProject(newProject)
  	.then(id => res.status(201).json({id: id[0]}))
    .catch(err => {
      err.errno === 1 ? res.status(400).json({ error: "Name, description, or completed is not spelled correctly."}): res.status(500).json({error: `Server error --> ${err}`})
    })
});

//Adds an action
router.post('/api/actions', (req, res) => {
  const newAction = req.body;
  if(!newAction.project_id) {
    res.status(400).json({error: "Need a project id." })
  }
  
  db.addActions(newAction)
    .then(id => res.status(201).json({id: id[0]}))
    .catch(err => {
    err.errno === 1 ? res.status(400).json({ error: "Description,notes, or completed is not spelled correctly."}): res.status(500).json({error: `Server error --> ${err}`})
  })
});


module.exports = router;