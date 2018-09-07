const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());


//middleware
function verifyProject (req, res, next) {
    const id = req.body.project_id;
    db('projects').where({ id: id })
    .then(project => {
        if (project.length === 0) {
        res.status(404).json({ message: "Please enter a valid project ID." });
        } else next();
    })
    .catch(err => res.status(500).json(err));
}


//project endpoints
server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "Please provide a name and description for the project." })
    } else
        db.insert(project)
        .into('projects')
        .then(ids => {
        res.status(201).json(ids);
        })
        .catch(err => res.status(500).json({ error: "There was an error saving the project." }))
})

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.status(500).json({ error: "There was an error retrieving the projects." }));
});

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects as p')
    .where('p.id', id)
    .join('actions as a', 'p.id', 'a.project_id')
    .then(project => {
        if (project.length === 0) {
        res.status(404).json({ message: "The project with the specified ID does not exist." });
        } else 
        res.status(200).json(project);
    })
    .catch(err => res.status(500).json(err));
})

server.delete('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects').where({ id: id }).del()
    .then(count => {
        if (count) {
        res.status(200).json({ message: "The project was successfully deleted." });
        } else {
        res.status(404).json({ message: "The project with the specified ID does not exist." });
        }
    })
    .catch(err => res.status(500).json({ error: "There was an error deleting the project." }));
})

server.put('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "Please provide a name and description for the project." })
    } else
        db('projects').where({ id: id }).update(project)
        .then(count => {
        if (count) {
            res.status(200).json({ message: "The project was successfully updated." });
        } else {
            res.status(404).json({ message: "The project with the specified ID does not exist." });
        }
        })
        .catch(err => res.status(500).json({ error: "There was an error updating the project." }));
})


//action endpoints
server.post('/api/actions', verifyProject, (req, res) => {
    const action = req.body;
    if (!action.description || !action.notes) {
        res.status(400).json({ error: "Please provide a description and notes for the action." })
    } else
        db.insert(action)
        .into('actions')
        .then(ids => {
        res.status(201).json(ids);
        })
        .catch(err => res.status(500).json({ error: "There was an error saving the action." }))
})

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => res.status(500).json({ error: "There was an error retrieving the actions." }));
});

server.get('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions').where({ id: id })
    .then(action => {
        if (action.length === 0) {
        res.status(404).json({ message: "The action with the specified ID does not exist." });
        } else 
        res.status(200).json(action);
    })
    .catch(err => res.status(500).json(err));
})

server.delete('/api/actions/:id', (req, res) => {
    const {id} = req.params;
    db('actions').where({ id: id }).del()
    .then(count => {
        if (count) {
        res.status(200).json({ message: "The action was successfully deleted." });
        } else {
        res.status(404).json({ message: "The action with the specified ID does not exist." });
        }
    })
    .catch(err => res.status(500).json({ error: "There was an error deleting the action." }));
})

server.put('/api/actions/:id', verifyProject, (req, res) => {
    const {id} = req.params;
    const action = req.body;
    if (!action.description || !action.notes) {
        res.status(400).json({ error: "Please provide a description and notes for the action." })
    } else
        db('actions').where({ id: id }).update(action)
        .then(count => {
        if (count) {
            res.status(200).json({ message: "The action was successfully updated." });
        } else {
            res.status(404).json({ message: "The action with the specified ID does not exist." });
        }
        })
        .catch(err => res.status(500).json({ error: "There was an error updating the action." }));
})


const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});