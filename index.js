const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());


// ___________ POST Project_______________
//[POST] /api/cohorts This route should save a new project to the database.
server.post('/api/projects', async (req, res) => {
    const projectData = req.body;
    const characterLimit = 128;
    let newProject;

    if (!projectData.name || projectData.name==="" || !projectData.description || projectData.description===""  ) {
        const errorMessage = "Please provide both a name and description for the project"; 
        res.status(400).json({ errorMessage});
        return
    }   
    if (projectData.name.length > characterLimit) {
        const errorMessage = "Please provide name under 128 characters"; 
        res.status(400).json({ errorMessage});
        return
    }  
    try {
        newProject = await db('projects').insert(projectData);
    } catch (error) {
            res.status(500).json({ error: "There was an error while saving the project to the database" });
            return      
    }
    res.status(201).json(newProject);
    return
});



// ___________ POST Action_______________
//[POST] /api/projectactions/:id This route should save a 
// new action to the database. **Requires a project ID be provided.

server.post('/api/projectactions/:id', async (req, res) => {
    const { id } = req.params; 
    const actionData = req.body;
    const characterLimit = 128;
    let newAction;
  
    if (!actionData.project_id || actionData.project_id !== id || actionData.project_id=== "" ) {
        const errorMessage = "Please provide the correct id number for project"; 
        res.status(400).json({ errorMessage});
        return
    } 
  
    if (!actionData.description|| actionData.description==="" || !actionData.notes || actionData.notes===""  ) {
        const errorMessage = "Please provide both a note and description for the project"; 
        res.status(400).json({ errorMessage});
        return
    }  
    if (actionData.description.length > characterLimit) {
        const errorMessage = "Please provide description under 128 characters"; 
        res.status(400).json({ errorMessage});
        return
    }  
    try {
        newAction = await db('actions').insert(actionData)

    } catch (error) {
        console.log(error)
            res.status(500).json({ error: "There was an error while saving the project to the database" });
            return      
    }

    res.status(201).json(newAction);
        return
});  

// ___________ GET Projects + GET by ID_______________
//[GET] /api/projects This route will return an array of all projects.
//[GET] /api/projects/:id This route will return the project with the matching id.

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(cohorts => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
    .where({ id:id })
    .then(project => { 
      if (!project ) { 
      res.status(404).json({ message: "The project with the specified ID does not exist." });
      return  
      } else if (!project.length) { 
       res.status(404).json({ message: "The project with the specified ID does not have any actions yet." });
       return  
       } else if (project && project.length){ 
      res.status(200).json(cohort);
      return  
      }
    })
    .catch(err => {
      res 
        .status(500)
        .json({ error: "The post information could not be retrieved." });
    });
  });

const port = 8800;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
