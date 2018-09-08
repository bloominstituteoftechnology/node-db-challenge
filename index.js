const express = require('express');
const helmet = require('helmet');

const db = require('./db/helpers/helper');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running....')
});

// ########## GET ALL PROJECTS ################
server.get('/projects', (req, res) => {
    db.getProjects()
      .then(projects => res.status(200).json(projects))
      .catch(err => res.status(500).json(err))
  });

// ########### GET PROJECT BY ID ################
server.get('/projects/:id', (req, res) => {
    const { id } = req.params
    db.getProject(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// ########## POSTING NEW PROJECT ###########
server.post('/projects', (req, res) => {
    const { name, description } = req.body;
    const project = req.body;
    if (!name || !description) {
        res.status(400).json('Message: name and description are required fields!')
    }

    db.addProject(project)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// ########### UPDATING PROJECT ###########
server.put('/projects/:id', (req, res) => {
    const {name, description} = req.body;
    const {id} = req.params;
    const updatedProject = req.body;
    if (!name || !description) {
        res.status(400).json('Message: In order to update project name and description are required fields!')
    }
    db.updateProject(id, updatedProject)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// ########### DELETE PROJECT ###############
server.delete('/projects/:id', (req, res) => {
    const {id} = req.params;
    db.deleteProject(id)
        .then(projects => {
            res.status(200).json(projects)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// ########### GETTING ALL ACTIONS ##################
server.get('/actions', (req, res) => {
    db.getActions()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// ########### GETTING ACTION BY ID ##############
server.get('/actions/:id', (req, res) => {
    const {id} = req.params;

    db.getAction(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// ########### POSTING NEW ACTION #################
server.post('/actions', (req, res) => {
    const { project_id, description, notes } = req.body;
    const action = req.body;
    if (!project_id || !description || !notes) {
        res.status(400).json('Message: project_id, description and notes are required fields!')
    }

    db.addAction(action)
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(error => {
      res.status(500).json(error)
    })
});

// ############# UPDATING ACTION ##################
server.put('/actions/:id', (req, res) => {
    const {description, notes} = req.body;
    const {id} = req.params;
    const updatedAction = req.body;
    if (!description || !notes) {
        res.status(400).json('Message: In order to update project name and description are required fields!')
    }
    db.updateAction(id, updatedAction)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

// ############### DELETING ACTION #####################
server.delete('/actions/:id', (req, res) => {
    const {id} = req.params;
    db.deleteAction(id)
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

server.listen(5000);