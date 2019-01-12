const express = require('express');
const knex = require('knex');
const db_config = require('./knexfile.js');

const server = express();
const db = knex(db_config.development);
const PORT = 5678;

server.use(express.json());


/********* Get Projects *************/
server.get('/api/projects', (req, res) => {

    db('projects')
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/********* Get Actions *************/
server.get('/api/actions', (req, res) => {

    db('actions')
        .then(actions => {
            res.json(actions);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/********* Get Single Post *************/
server.post('/api/projects', (req, res) => {
    const newProject = req.body;
    if (newProject.project) {
        console.log("newProject:", newProject)
        db('projects').insert(newProject)
            .then(ids => {
                res.status(201)
                    .json(ids);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert project into db" })
            })
    } else {
        res
            .status(400)
            .json({ message: "missing contents" })
    }
});

/********* Get Single Post *************/
server.post('/api/actions', (req, res) => {
    const newAction = req.body;
    if (newAction.description) {
        console.log("newAction:", newAction)
        db('actions').insert(newAction)
            .then(ids => {
                res.status(201)
                    .json(ids);
            })
            .catch(err => {
                res
                    .status(500)
                    .json({ message: "failed to insert action into db" })
            })
    } else {
        res
            .status(400)
            .json({ message: "missing contents" })
    }
});

server.get("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    console.log("id", id);
    db('projects').leftJoin('actions', 'projects.id', 'actions.project_id')
        .where("projects.id", id)
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ error: err });
        });
});

/************* Delete Project *************/
server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params
    db('projects')
        .where('id', id)
        .del()
        .then(delId => {
            res.json(delId);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The project could not be removed." });
        });
});

/************* Delete Action *************/
server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params
    db('actions')
        .where('id', id)
        .del()
        .then(actionId => {
            res.json(actionId);
        })
        .catch(err => {
            res
                .status(500)
                .json({ error: "The action could not be removed." });
        });
});



/************* End of CRUD  *************/

server.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});