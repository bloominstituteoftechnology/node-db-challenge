const express = require('express');

const projectDb = require('./data/helpers/projectsDb.js');
const actionDb = require('./data/helpers/actionsDb.js');

const server = express();

server.use(express.json());

// [GET] /api/projects
server.get('/api/projects', (req, res) => {
    projectDb.getProjects()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving projects' });
        });
});

// [GET] /api/projects/:id
server.get('/api/projects/:id', (req, res) => {
    projectDb.getProject(req.params.id)
        .then(project => {
            if (project.length) {
                res.status(200).json(project);
            } else {
                throw new Error();
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving project, id may not exist' });
        });
});

// [GET] /api/actions
server.get('/api/actions', (req, res) => {
    actionDb.getActions()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving actions' });
        });
});

// [GET] /api/actions/:id
server.get('/api/actions/:id', (req, res) => {
    actionDb.getAction(req.params.id)
        .then(action => {
            if (action.length) {
                res.status(200).json(action);
            } else {
                throw new Error();
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error retrieving action, id may not exist' })
        })
})

// [POST] /api/projects
server.post('/api/projects', (req, res) => {
    projectDb.addProject(req.body)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error creating project' });
        });
});

// [POST] /api/actions
server.post('/api/actions', (req, res) => {
    actionDb.addAction(req.body)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ error: err, errorMessage: 'Error creating action' });
        });
})

const port = 9000;
server.listen(port, () => console.log(`\nListening on port ${port}\n`));