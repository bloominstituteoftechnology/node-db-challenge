const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

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


const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});