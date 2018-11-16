// Imports
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const db = require('./data/helper');

// Creating server
const server = express();
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

// API Status at Root
server.get('/', (req, res) => res.send({API: "live"}));

// Projects API --------------------------------------------------------------------------------------------------------------
server.get('/api/projects', (req, res) => {
    
})

server.post('/api/projects', (req, res) => {
    const {name, description} = req.body;
    if (!name || !description) {
        res.status(400).json({message: "Please provide a name and description for the project."})
    } else {
        db.addProject(req.body)
            .then(project => {
                res.status(201).json(project);
            })
            .catch(err => {
                res.status(500).json({message:"There was an error while saving the project to the database.", err});
            })
    }
})

server.get('/api/projects/:id', (req, res) => {
    const id = req.params.id;
    db.getProject(id)
        .then(project => {
            if (project) {
                db.getActions(id)
                    .then(actions => {
                        const result = Object.assign({project}, {actions: actions})
                        res.status(200).json(result);
                    })
                    .catch(err => res.status(500).json(err))
            } else {
                res.status(404).json({message: "The project with the specified ID does not exist."});
            }
        })
        .catch(err => {
            res.status(500).json({error: "The project information could not be retrieved.", err});
        })
})

// Actions API ---------------------------------------------------------------------------------------------------------------
server.post('/api/actions', (req, res) => {
    const {description, notes, projectId} = req.body;
    if (!description || !notes || !projectId) {
        res.status(400).json({message: "Please provide a description, notes, and projectId."});
    } else {
        db.addAction(req.body)
            .then(action => {
                res.status(201).json(action)
            })
            .catch(err => {
                res.status(500).json({message: "There was an error while saving the action to the database.", err});
            })
    }
})


// Dynamic Port
const port = process.env.PORT || 9000;
server.listen(port, () => console.log(`Listening on http://localhost:${port}`))