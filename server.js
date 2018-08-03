const express = require('express');

const knexDb = require('./data/db');

const server = express();
server.use(express.json());

// === Re-factor later if there's time for routing
// const projectCrud = require('./crud/projectEndpoints');
// const actionCrud = require('./crud/actionEndpoints');
// const basicCrud = require('./crud/basicEndpoints');

// server.use(projectCrud);
// server.use(actionCrud);
// server.use(basicCrud);

// GET @ Root
server.get('/', (req, res) => {
    res.send(`The Spirit of David Allen's "GETTING THINGS DONE" Methodical API is here. Go to /projects or /actions for more data.`);
})

// === PROJECTS ===

// GET all projects

server.get('/projects', (req, res) => {
    knexDb('projects')
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(err => {
        res.status(500).json({err, message: "Something's wrong with the server."})
    })
})

// POST project to projects

server.post('/projects', (req, res) => {
    const project = req.body;

    console.log(project);
    knexDb.insert(project).into('projects')
    .then(ids => {
        const id = ids[0];

        res.status(201).json({ id, ...project });
    })
    .catch(err => {
        res.status(500).json({err, message:"Please make sure that you provided a name & description for the project. Also, make sure this project doesn't have a duplicate name as an existing project."});
    })
})

// GET project by project_id

server.get('/projects/:id', (req, res) => {
    const id = req.params.id;

    knexDb('projects')
    .select('')
    .where('project_id', id)
    // .join('actions', 'projects.project_id', '=', 'actions.action_id')
    .then(project => {
        // console.log(req.params, projects);
        if(project.toString() === '') {
            res.status(404).json({message: "Doesn't seem like that project exists."})
            return;
        }
        knexDb('actions')
        .where('project_id', id)
        .then(actions => {
            res.status(200).json({ project, actions });
        })
    })
    .catch(err => {
        res.status(500).json({err, message: "Something's wrong with the server."})
    })
})

// PUT update project by id

server.put('/projects/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const { name, description } = req.body;

    knexDb('projects')
    .where(`project_id`, id)
    .update({name, description})
    .then(response => {
        if(!response) {
            res.status(404).json({message: "Couldn't update project."})
            return;
        }
        knexDb('projects')
        .where(`project_id`, id)
        .then(project => {
            res.status(200).json({ project, message: "Successfully updated project."})
        })
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// DELETE project by id

server.delete('/projects/:id', (req, res) => {
    const { id } = req.params;

    knexDb('projects')
    .where('project_id', id)
    .del()
    .then(response => {
        if(!response) {
            res.status(404).json({response, message: `Project ${id} doesn't exist.`})
            return;
        }
        res.status(200).json({response, message: `Project ${id} has been deleted.`})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// === ACTIONS ===

// GET all actions

server.get('/actions', (req, res) => {
    knexDb('actions')
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({err, message: "Something's wrong with the server."})
    })
})

// POST action to actions

server.post('/actions', (req, res) => {
    const action = req.body;

    console.log(action);
    knexDb.insert(action).into('actions')
    .then(ids => {
        const id = ids[0];

        res.status(201).json({ id, ...action });
    })
    .catch(err => {
        res.status(500).json({err, message:"Please make sure that you provided description (& notes are optional) for the action."});
    })
})

// GET action by action_id

server.get('/actions/:id', (req, res) => {
    const id = req.params.id;

    knexDb('actions')
    .where('action_id', id)
    .then(actions => {
        // console.log(req.params, actions);
        if(actions.toString() === '') {
            res.status(404).json({message: "Doesn't seem like that action exists."})
            return;
        }
        res.status(200).json(actions);
    })
    .catch(err => {
        res.status(500).json({err, message: "Something's wrong with the server."})
    })
})

// PUT update action by id

server.put('/actions/:id', (req, res) => {
    // const id = req.params.id;
    const { id } = req.params;
    const { description, notes } = req.body;

    knexDb('actions')
    .where(`action_id`, id)
    .update({description, notes})
    .then(response => {
        if(!response) {
            res.status(404).json({message: "Couldn't update action."})
            return;
        }
        knexDb('actions')
        .where(`action_id`, id)
        .then(action => {
            res.status(200).json({ action, message: "Successfully updated action."})
        })
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

// DELETE delete action by id

server.delete('/actions/:id', (req, res) => {
    const { id } = req.params;

    knexDb('actions')
    .where('action_id', id)
    .del()
    .then(response => {
        if(!response) {
            res.status(404).json({response, message: `Action ${id} doesn't exist.`})
            return;
        }
        res.status(200).json({response, message: `Action ${id} has been deleted.`})
    })
    .catch(err => {
        res.status(500).json(err);
    })
})


const port = 8333;
server.listen(port, () => {
    console.log(`\n === Web API listening on http://localhost:${port} === \n`);
})