const express = require('express');
const db = require('./data/db');
const server = express();

server.use(express.json());

// ==== PROJECT REQUESTS ====

server.get('/projects', (req, res) => {
    db('projects')
        .then(projs => {
            res.status(200).json(projs)
        })
        .catch(() => res.status(500).json(err))
})

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;
    
    db('projects')
        .where({ id })
        .first()
        .then(response => {
            if (response) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'The project with the specified ID could not be found' })
            }
        })
        .catch(err => res.status(500).json(err))
})


// ==== ACTION REQUESTS ====

server.get('/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => { res.status(500).json(err) })
})

server.get('/actions/:id', (req, res) => {
    const { id } = req.params;

    db('actions')
        .where({ id })
        .then(response => {
            if (response) {
                res.status(200).json(response)
            } else {
                res.status(404).json({ message: 'The action with the specified ID could not be found' })
            }
        })
        .catch(err => res.status(500).json(err))
})


server.listen(8000, () => console.log('\n==== API is running... ====\n'));