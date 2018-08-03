const express = require('express');

const projects = require('./data/helper/projectHelper');
const actions = require('./data/helper/actionHelper');

const server = express();
server.use(express.json());

server.get('/', (req, res, next) => {
    res.send('Server Running');
})
//Get Projects
server.get('/api/projects', (req, res, next) => {
    projects.find().then(response => {
        res.status(200).json(response);
    }).catch(err => next({
        err,
        code: err.code
    }))
})

//Get Specific Project
server.get('/api/projects/:id', (req, res, next) => {
    let id = req.params.id;
    projects.find(id).then(response => {
            res.status(200).json(response);
        })
        .catch(err => next({
            err,
            code: err.code
        }))
})

//Create/Insert New Project
server.post('/api/projects', (req, res, next) => {
    let name = req.body.name;
    let description = req.body.description;
    let completed = req.body.completed;
    if (req.body.completed === "true" || req.body.completed === true) {
        completed = true;
    } else {
        completed = false;
    }
    let newProject = {
        name,
        description,
        completed,
    }
    if (newProject.name.length > 128) {
        return next({
            code: 128,
            message: "Name Field: Character limit exceeded (128 characters)."
        })
    }
    if (!newProject.description || !newProject.name) {
        return next({
            code: 400
        })
    }else {
        projects.insert(newProject)
            .then(projects => {
                console.log(projects)
                res.status(201).json(projects)
            })
            .catch(err => next({
                err,
                code: err.code
            }))
    }
})

//UPDATE project
server.put('/api/projects/:id', (req, res, next) => {
    let id = req.params.id;
    let name = req.body.name;
    let description = req.body.description;
    let completed = req.body.completed;
    if (req.body.completed === "true" || req.body.completed === true) {
        completed = true;
    } else {
        completed = false;
    }
    let updatedProject = {
        name,
        description,
        completed,
    }
    if (updatedProject.name.length > 128) {
        return next({
            code: 128,
            message: "Name Field: Character limit exceeded (128 characters)."
        })
    }
    if (!updatedProject.description || !updatedProject.name) {
        return next({
            code: 400
        })
    } else {
        projects.update(id, updatedProject)
            .then(projects => {
                console.log(projects)
                res.status(200).json(projects)
            })
            .catch(err => next({
                err,
                code: err.code
            }))
    }
})

//DELETE Project
server.delete('/api/projects/:id', (req, res, next) => {
    let id = req.params.id;
    projects.remove(id)
        .then(project => {
            if (!project) {
                return next({
                    code: 404
                })
            } else {
                console.log(project)
                res.status(200).json('Action successfully deleted')
            }
        })
        .catch(err => next({
            code: 500
        }))
})

//Get Actions
server.get('/api/actions', (req, res, next) => {
    actions.find()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => next({
            err,
            code: err.code
        }))
})

//Get specifc Action
server.get('/api/actions/:id', (req, res, next) => {
    let id = req.params.id;
    actions.find(id).then(response => {
        res.status(200).json(response);
    }).catch(err => next({
        err,
        code: err.code
    }))
})


//Insert/create a new action
server.post('/api/actions', (req, res, next) => {

    let project_id = req.body.project_id;
    let description = req.body.description;
    let completed = req.body.completed;
    let notes = req.body.notes;
    if (req.body.completed === "true" || req.body.completed === true) {
        completed = true;
    } else {
        completed = false;
    }
    let newAction = {
        project_id,
        description,
        completed,
        notes,
    }
    if (newAction.description.length > 128) {
        return next({
            code: 128
        })
    }
    if (!newAction.description || !newAction.project_id || !newAction.notes) {
        return next({
            code: 400
        })
    } else {
        actions.insert(newAction)
            .then(action => {
                console.log(action)
                res.status(201).json(action)
            })
            .catch(err => next({
                err,
                code: err.code
            }))
    }
})

//UPDATE Action
server.put('/api/actions/:id', (req, res, next) => {
    let id = req.params.id;
    let project_id = req.body.project_id;
    let notes = req.body.notes;
    let description = req.body.description;
    let completed = req.body.completed;
    if (req.body.completed === "true" || req.body.completed === true) {
        completed = true;
    } else {
        completed = false;
    }
    let updatedAction = {
        notes,
        project_id,
        description,
        completed,

    }
    if (updatedAction.description.length > 128) {
        return next({
            code: 128,
            message: "Description Field: Character limit exceeded (128 characters)."
        })
    }
    if (!updatedAction.description || !updatedAction.project_id || !updatedAction.notes) {
        return next({
            code: 400
        })
    } else {
        actions.update(id, updatedAction)
            .then(action => {
                console.log(action)
                res.status(200).json(action)
            })
            .catch(err => next({
                err,
                code: err.code
            }))
    }
})

//DELETE Action
server.delete('/api/actions/:id', (req, res, next) => {
    let id = req.params.id;
    actions.remove(id)
        .then(action => {
            if (!action) {
                return next({
                    code: 404
                })
            } else {
                console.log(action)
                res.status(200).json('Action successfully deleted')
            }
        })
        .catch(err => next({
            code: 500
        }))
})

//error handler
server.use((err, req, res, next) => {
    switch (err.code) {
        case 128:
            return res.send({
                "Error Code": err.code,
                "Details": res.body,
                "Message": err.message
            });
        case 404:
            return res.status(404).send({
                "Error Code": err.code,
                "Details": res.body,
                "Message": "Requested resource is not found."
            });

        case 400:
            return res.status(400).send({
                "Error Code": err.code,
                "Details": res.body,
                "Message": "Cancelled. Missing required information"
            });

        default:
            return res.status(500).send({
                "Error Code": err.code,
                "Details": res.body,
                "Message": "Server error. please contact system administrator."
            });
    }
});

server.use((req, res, next) => res.send('Unknown error please contact your system administrator'));

const port = 8000;
server.listen(port, () => console.log(`server running on port: ${port}`));