const express = require('express');
const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const server = express();
const PORT = 42;

server.use(express.json());

server.post('/api/projects', (req, res) => {
    const { name, description, completed } = req.body;
    const project = { name, description, completed };
    if (!project) {
        res
            .status(400)
            .json({ message: 'Please enter a project' });
    }
    db.insert(project)
        .into('projects')
        .then(ids => {
            res
                .status(201)
                .json( ids );
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: 'The project could not be posted' });
        })
});

server.post('/api/actions', (req, res) => {
    const { description, notes, projectId } = req.body;
    const action = { description, notes, projectId };
    if (!action) {
        res
            .status(400)
            .json({ message: 'Please enter an action' });
    }
    db.insert(action)
        .into('actions')
        .then(ids => {
            res
                .status(201)
                .json( ids );
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: 'The action could not be posted' });
        })
});

server.get('/api/projects/:id', (req, res) => {
    db('projects')
        .where('id', id)
            .then(project => {
                if(!project) {
                    res
                        .status(404)
                        .json({ message: 'The specified project could not be retreived' });
        }
        db('actions')
            .where('project_id', id)
                .then(actions => {
                    project[0].actions = actions;
                        res
                            .status(200)
                            .json(project);
                })
                    .catch(err => {
                        res
                            .status(500)
                            .json({ message: 'The project could not be retreived' })
        });
    });
});

//stretch goal 1 
server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res
                .status(200)
                .json(actions);
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: 'The actions cannot be retreived' });
        })
});

server.get('/api/projects', (req, res) => {
    db('projects') 
        .then(projects => {
            res
                .status(200)
                .json(projects);
        })
        .catch(err => {
            res
                .status(500)
                .json({ message: 'The projects could not be retreived' });
        })
});  

//end of stretch goal 1

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});