const express = require('express');

const db = require('./data/db.js');

const server = express();

server.use(express.json());

///endpoints go here
server.get('/', (req, res) => {
    res.send('We runnin....')
  })

// PROJECTS------------------------------------------------------------------------------
//Get All Projects
server.get('/projects', (req, res) =>{
    db('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({ error: "The projects could not be retrieved." });
      });
})

//Post New Project
server.post('/projects', (req, res) => {
    const { name, description } = req.body;
    if (!name || !description) {
        res.status(400).json({
          errorMessage:
            "Please provide name and description for the project."
        });
        return;
      }
    db()
    .insert({ name, description })
    .into('projects')
    .then(project => {
        res.status(201).json({ name, description })
    })
    .catch(err => {
        res.status(500).json({
            error: "There was an error while saving the project to the database"
          });
      });
})









// ACTIONS------------------------------------------------------------------------------
//Get All Actions
server.get('/actions', (req, res) =>{
    db('actions')
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err))
})


//Post New Action
server.post('/actions', (req, res) => {
    const { project_id, description, notes } = req.body;
    if (!project_id || !description) {
        res.status(400).json({
          errorMessage:
            "Please provide project id and description for the action."
        });
        return;
      }
    db()
    .insert({ project_id, description, notes })
    .into('actions')
    .then(project => {
        res.status(201).json({ project_id, description, notes})
    })
    .catch(err => {
        res.status(500).json({
            error: "There was an error while saving the action to the database"
          });
      });
})



const port = 3300;
server.listen(port, function() {
 console.log(`\n=== Yo Yo, Web API Listening on http://localhost:${port} ===\n`);
});

