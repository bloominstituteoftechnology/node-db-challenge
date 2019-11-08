const express = require('express');
const router = express.Router();
const db = require('./model');

router.get('/', (req, res) => {
    db.getProjects()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/resources', (req, res) => {
    db.getResources()
    .then(resources => {
        res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/tasks', (req, res) => {
    db.getTasks()
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/:id', validateProjectId, (req, res) => {
    const id = req.params.id;
    db.getProjectById(id)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/resources/:id', validateResourceId, (req, res) => {
    const id = req.params.id;
    db.getResourceById(id)
    .then(resource => {
        res.status(200).json(resource);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/tasks/:id', validateTaskId, (req, res) => {
    const id = req.params.id;
    db.getTaskById(id)
    .then(task => {
        res.status(200).json(task);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.get('/:id/tasks', validateProjectId, (req, res) => {
    const id = req.params.id;
    db.getTasksByProject(id)
    .then(tasks => {
        res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ message: 'Unable to fetch tasks for project by ID.', error: err }));
})

router.post('/', (req, res) => {
    const project = req.body;
    db.addProject(project)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/resources', (req, res) => {
    const resource = req.body;
    db.addResource(resource)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/tasks', (req, res) => {
    const task = req.body;
    db.addTask(task)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})


//MIDDLEWARE

function validateProjectId (req, res, next) {
    const id = req.params.id;
    db.getProjectById(id)
    .then(project => {
        project.length === 0 && res.status(404).json({ error: "Project with provided ID not found in database." })
        next();
    })
    .catch(err => res.status(500).json({ error: "Project with provided ID not found in database." }));
}

function validateResourceId (req, res, next) {
    const id = req.params.id;
    db.getResourceById(id)
    .then(resource => {
        resource.length === 0 && res.status(404).json({ error: "Resource with provided ID not found in database." })
        next();
    })
    .catch(err => res.status(500).json({ error: "Resource with provided ID not found in database." }));
}

function validateTaskId (req, res, next) {
    const id = req.params.id;
    db.getTaskById(id)
    .then(task => {
        task.length === 0 && res.status(404).json({ error: "Task with provided ID not found in database." })
        next();
    })
    .catch(err => res.status(500).json({ error: "Task with provided ID not found in database." }));
}

module.exports = router;