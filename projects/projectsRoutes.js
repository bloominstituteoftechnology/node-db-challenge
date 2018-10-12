const express = require('express');

const projects = require('./projectsModel.js');

const router = express.Router();

router.get('/', (req, res) => {
    projects
    .getProject()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const project = await projects.getProjectById(id);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', (req, res) => {
    const project = req.body;

    projects
        .addProject(project)
        .then(ids => {
            res.status(201).json(ids[0]);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});



module.exports = router;