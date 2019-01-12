const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');
const server = express();
const db = knex(dbConfig.development);
const PORT = 4500;

server.use(express.json());

//beginning of /api/projects endpoints

//POST /api/projects
server.post('/api/projects', (req, res) => {
    const project = req.body;
    db('projects').insert(project)
        .then(id => {
            res.status(201).json(id);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to inserkt project' });
        });
});

//GET /api/projects
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find projects' });
        });
});

//GET BY ID /api/projects/:id
server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find project with that id.' });
        });
});

// PUT /api/projects/:id
server.put('/api/projects/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    db('projects').where('id',id).update(project)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Project.' });
        });
});

// DELETE /api/projects/:id
server.delete('/api/projects/id', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id).del()
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete project.' });
        });
});

//end of /api/projects endpoints
//beginning of /api/actions endpoints


server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
})