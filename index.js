const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
 const dbConfigure = require('./knexfile');
 const db = knex(dbConfigure.development);
 const server = express();

 server.use(helmet());
server.use(express.json());

//PROJECT ENDPOINTS

server.post('/api/projects', (req, res) => {
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "This project needs a name and description!" })
    } else
        db.insert(project)
        .into('projects')
        .then(ids => {
        res.status(201).json(ids);
        })
        .catch(err => res.status(500).json({ error: "Uh oh! The project could not be saved." }))
})

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The project could not be retrieved." }));
});
 server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    db('projects as p')
    .where('p.id', id)
    .join('actions as a', 'p.id', 'a.project_id')
    .then(project => {
        if (project.length === 0) {
        res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
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
        res.status(200).json({ message: "The project was successfully deleted!" });
        } else {
        res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
        }
    })
    .catch(err => res.status(500).json({ error: "Uh oh! The project couldn't be deleted!" }));
})
server.put('/api/projects/:id', (req, res) => {
    const {id} = req.params;
    const project = req.body;
    if (!project.name || !project.description) {
        res.status(400).json({ error: "This project needs a name and description!" })
    } else
        db('projects').where({ id: id }).update(project)
        .then(count => {
        if (count) {
            res.status(200).json({ message: "The project was successfully updated." });
        } else {
            res.status(404).json({ message: "Uh oh! There is no project with this ID!" });
        }
        })
        .catch(err => res.status(500).json({ error: "Uh oh! The project couldn't be updated" }));
})

const port = 5000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});