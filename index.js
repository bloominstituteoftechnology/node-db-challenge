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

server.post('/projects', (req, res) => {
    const proj = req.body;
    db
        .insert(proj)
        .into('projects')
        .then(ids => {
            const id = ids[0];
            res.status(201).json({ id, ...proj });
        })
        .catch(err => res.status(500).json(err))
})

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id })
        .del()
        .then(proj => {
            res.status(200).json(proj)
        })
        .catch(err => res.status(500).json(err))
})

server.put('/project', (req, res) => {
    const { id } = req.params;
    const proj = req.body;
    db('actions')
        .where({ id })
        .update({ project: proj })
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

server.post('/actions', (req, res) => {
    const action = req.body
    db
        .insert(action)
        .into('actions')
        .then(ids => {
            const id = ids[0];
            res.status(200).json({ id, ...zoo })
        })
        .catch(err => res.status(500).json(err))
})

server.delete('/actions/:id', (req, res) => {
    const { id } = req.params;

    db('actions')
        .where({ id })
        .del()
        .then(action => {
            res.status(200).json(action)
        })
        .catch(err => res.status(500).json(err))
})



server.listen(8000, () => console.log('\n==== API is running... ====\n'));