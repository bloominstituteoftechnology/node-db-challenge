const express = require('express');
const projects = require('./projectsController');
const projectsRouter = express.Router();

projectsRouter.projects()


// create project
projectsRouter.post('/', function (req, res) {
    const projects = req.body;
    projects
        .insert(project)
        .then(function (id) {
            res.status(201).json(id);
        })
        .catch(function (err) {
            res.status(500).json({ error });
        });
});

// return all projects
projectsRouter.get('/', function (req, res) {
    projects
        .get()
        .then(function (projects) {
            res.status(200).json(projects);
        })
        .catch(function (error) {
            res.status(500).json({ error });
        });
});


// return project of specified post id
projectsRouter.get('/:id', function (req, res) {
    const { id } = req.params;
    projects
        .get(id)
        .then(function (project) {
            if (project) {
                res.status(200).json(project);
            } else {
                res.status(404).json(null);
            }
        })
        .catch(function (error) {
            res.status(500).json({ error });
        });
});



// update project using specified project id
projectsRouter.put('/:id', function (req, res) {
    const { id } = req.params;
    projects
        .update(id, req.body)
        .then(function (count) {
            if (count > 0) {
                res.status(200).json({ updated: count });
            } else {
                res.status(404).json(null);
            }
        })
        .catch(function (error) {
            res.status(500).json({ error });
        });
});

// delete specified project id
projectsRouter.delete('/:id', function (req, res) {
    const { id } = req.params;
    projects
        .remove(id)
        .then(function (count) {
            res.status(200).json({ count });
        })
        .catch(function (error) {
            res.status(500).json({ error });
        });
});

module.exports = projectsRouter;