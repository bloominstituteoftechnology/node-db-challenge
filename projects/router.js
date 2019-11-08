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
        tasks.length === 0 && res.status(200).json("Provided project ID has no associated tasks.")
        res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json({ message: 'Unable to fetch tasks for project by ID.', error: err }));
})

router.get('/:id/resources', validateProjectId, (req, res) => {
    const id = req.params.id;
    db.getResourcesByProject(id)
    .then(resources => {
        resources.length === 0 && res.status(200).json("Provided project ID has no associated resources.")
        res.status(200).json(resources);
    })
    .catch(err => res.status(500).json({ message: 'Unable to fetch resources for project by ID.', error: err }));
})

router.post('/', validateProject, (req, res) => {
    const project = req.body;
    db.addProject(project)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/resources', validateResource, (req, res) => {
    const resource = req.body;
    db.addResource(resource)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/tasks', validateTask, (req, res) => {
    const task = req.body;
    db.addTask(task)
    .then(response => {
        res.status(201).json(response);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.delete('/:id', validateProjectId, (req, res) => {
    const id = req.params.id;
    let count = 0;

    db.getTasksByProject(id)
    .then(tasks => {
        tasks.forEach(task => {
            const id = task.id;
            db.deleteTask(id)
            .then(response => {
                console.log(`Task ${id} deleted`, response);
                count += response;
            })
        })
    })
    .catch(err => res.status(500).json({ message: "Unable to delete tasks associated with project", error: err }));

    db.deleteProject(id)
    .then(response => {
        count += response;
        console.log(`Project ${id} deleted.`, response)
        console.log(`${count} records deleted.`)
        res.status(202).json(`${count} records deleted.`);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.delete('/resources/:id', validateResourceId, (req, res) => {
    const id = req.params.id;
    db.deleteResource(id)
    .then(response => {
        res.status(202).json(`${response} records deleted.`);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.delete('/tasks/:id', validateTaskId, (req, res) => {
    const id = req.params.id;
    db.deleteTask(id)
    .then(response => {
        res.status(202).json(`${response} records deleted.`);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.put('/project/:id', validateProjectId, validateProject, (req, res) => {
    const id = req.params.id;
    const update = req.body;
    db.updateProject(update, id)
    .then(response => {
        res.status(200).json(`${response} records updated.`);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.put('/project/resources/:id', validateResourceId, validateResource, (req, res) => {
    const id = req.params.id;
    const update = req.body;
    db.updateResource(update, id)
    .then(response => {
        res.status(200).json(`${response} records updated.`);
    })
    .catch(err => res.status(500).json({ error: err }));
})

router.put('/project/tasks/:id', validateTaskId, validateTask, (req, res) => {
    const id = req.params.id;
    const update = req.body;
    db.updateTask(update, id)
    .then(response => {
        res.status(200).json(`${response} records updated.`);
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

function validateProject (req, res, next) {
    const project = req.body;
    project.length === 0 && res.status(400).json('Please provide a project to add.')
    !project.name && res.status(400).json('Please provide a name for the project to add.')
    next();
}

function validateResource (req, res, next) {
    const resource = req.body;
    resource.length === 0 && res.status(400).json('Please provide a resource to add.')
    !resource.name && res.status(400).json('Please provide a name for the resource to add.')
    next();
}

function validateTask (req, res, next) {
    const task = req.body;
    task.length === 0 && res.status(400).json('Please provide a task to add.')
    !task.project_id && res.status(400).json('Task must be associated with a project_id.')
    !task.description && res.status(400).json('Please provide a description for the task to add.')
    next();
}

module.exports = router;