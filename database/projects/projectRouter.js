const express = require('express');
const projectRouter = express.Router();
const db = require('./projectController');

projectRouter.get('/', (req, res) => {
    db
        .getAll()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

projectRouter.post('/', (req, res) => {
    const { name, description, project_completed } = req.body;

    db
        .add(req.body)
        .then(added => {
            res.status(201).json({ msg: 'New project added - success!' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

projectRouter.delete('/:id', (req, res) => {
    const { id } = req.params;

    db
        .nuke(id)
        .then(deleted => {
            res.status(202).json({ msg: 'Project deleted - success!' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});
projectRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const projectUpdate = req.body;

    db
        .update(id, projectUpdate)
        .then(updated => {
            res.status(201).json({ msg: 'Project updated - success!' });
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = projectRouter;