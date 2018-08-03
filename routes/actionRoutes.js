const express = require('express');
const server = express.Router();
const db = require('../data/db');

// endpoints go here

server.get("/", (req, res) => {
    db("actions")
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => res.status(500).json(err));
});

server.get("/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
        .where({ id: Number(id) })
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json(err));
});

server.post("/", (req, res) => {
    const action = req.body;
    const { description, notes, completed } = action;

    db.insert(action)
        .into("actions")
        .then(ids => {
            const id = ids[0];
            res.status(201).json({ id, ...action });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

server.delete("/:id", (req, res) => {
    const { id } = req.params;
    db("actions")
        .where({ id: Number(id) })
        .delete()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => res.status(500).json(err));
});

server.put("/:id", (req, res) => {
    const id = req.params.id;
    const { description, notes, completed } = req.body;
    if (!description || !notes || !completed) res.status(400).json({ err });
    else {
        db("actions")
            .where({ id: Number(id) })
            .update({ description, notes, completed })
            .then(action => {
                if (action > 0) res.status(200).json(action);
                else res.status(400).json({ err });
            })
            .catch(err => res.status(500).json(err));
    }
});

// Get context by action id

server.get('/:id/contexts', (req, res) => {
    db('contexts')
        .where('actionId', req.params.id)
        .then(context => {
            if (context.length > 0) res.status(200).json(context);
            else res.status(200).json({ err });
        })
        .catch(err => res.status(500).json(err));
});

 module.exports = server;