const express = require('express');
const server = express.Router();
const db = require('../data/db');

// endpoints go here

server.get('/', (req, res) => {
    db('projects')
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => res.status(500).json(err));
});

server.get('/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id: Number(id) })
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json(err));
});

server.post('/', (req, res) => {
    const project = req.body;
    const { name, description, completed } = project;

    db.insert(project)
        .into('projects')
        .then(ids => {
            const id = ids[0];
            res.status(201).json({ id, ...project });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.delete('/:id', (req, res) => {
    const { id } = req.params;
    db('projects')
        .where({ id: Number(id) })
        .delete()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json(err));
});

server.put('/:id', (req, res) => {
    const id = req.params.id;
    const {name, description, completed} = req.body;
    if (!name) res.status(400).json({ err });
    else {
        db('projects')
            .where({ id: Number(id) })
            .update({name, description, completed})
            .then(project => {
                if (project > 0) res.status(200).json(project);
                else res.status(400).json({ err });
            })
            .catch(err => res.status(500).json(err));
    }
});

// Get actions by project id

server.get('/:id/actions', (req, res) => {
    db('actions')
        .where('projectId', req.params.id)
        .then(action => {
            if (action.length > 0) res.status(200).json(action);
            else res.status(200).json({ err });
        })
        .catch(err => res.status(500).json(err));
});



 module.exports = server;