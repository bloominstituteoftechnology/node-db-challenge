const express = require('express');

const bodyParser = require('body-parser');

const sqlite = require('sqlite3');
const knex = require('./db.js');

const server = express();

server.use(bodyParser.json());

// project routes

server.post('/projects', (req, res) => {
    const project = req.body;

    knex.insert(project)
        .into('projects')
        .then(function(ids) {
            res.status(201).json({ ids });
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not insert into table' });
        });
});

server.get('/projects', (req, res) => {
    const projects = knex('projects')
        .then(function(projects) {
            res.status(200).json(projects);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not insert into table' });
        });
});

server.get('/projects/:id', (req, res) => {
    const { id } = req.params;

    const projects = knex('projects')
        .where('id', id)
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not find that id' });
        });
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const updatedProject = req.body;

    const project = knex('projects')
        .where('id', id)
        .update(updatedProject)
        .then(function(successFindProject) {
            if (successFindProject === 0) throw new Error();
            res.status(200).json(successFindProject);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not update project' });
        });
});

server.delete('/projects/:id', function(req, res) {
    const { id } = req.params.id;

    const project = knex('projects')
        .where('id', id)
        .delete()
        .then(function(project) {
            if (!project) throw new Error();
            res.status(200).json(project);
        })
        .catch(function() {
            res.status(500).json( {errorMessage: 'You did not delete project' });
        });
});

// action routes

server.post('/actions', (req, res) => {
    const actions = req.body;

    knex.insert(actions)
        .into('actions')
        .then(function(ids) {
            res.status(201).json({ ids });
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'Cannot add action '});
        });
});

server.get('/actions', (req, res) => {
    const action = knex('actions')
        .then(function(action) {
            res.status(200).json(action);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not find action' });
        });
});

server.get('/actions/:id', (req, res) => {
    const { id } = req.params;

    const action = knex('actions')
        .where('id', id)
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not find that id' });
        });
});

server.put('/projects/:id', (req, res) => {
    const { id } = req.params;
    const updatedAction = req.body;

    const project = knex('actions')
        .where('id', id)
        .update(updatedAction)
        .then(function(successFindAction) {
            if (successFindAction === 0) throw new Error();
            res.status(200).json(successFindAction);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not update action' });
        });
});

server.delete('/actions/:id', function(req, res) {
    const { id } = req.params.id;

    const action = knex('actions')
        .where('id', id)
        .delete()
        .then(function(action) {
            if (!action) throw new Error();
            res.status(200).json(action);
        })
        .catch(function() {
            res.status(500).json( {errorMessage: 'You did not delete the action' });
        });
});

// context routes

server.post('/context', (req, res) => {
    const context = req.body;

    knex.insert(context)
        .into('context')
        .then(function(ids) {
            res.status(201).json({ ids });
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'Cannot add context'});
        });
});

server.get('/context', (req, res) => {
    const context = knex('context')
        .then(function(context) {
            res.status(200).json(context);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not find context' });
        });
});

server.get('/context/:id', (req, res) => {
    const { id } = req.params;

    const context = knex('context')
        .where('id', id)
        .then(function(records) {
            res.status(200).json(records);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not find that id' });
        });
});

server.put('/context/:id', (req, res) => {
    const { id } = req.params;
    const updatedContext = req.body;

    const context = knex('context')
        .where('id', id)
        .update(updatedContext)
        .then(function(successFindContext) {
            if (successFindContext === 0) throw new Error();
            res.status(200).json(successFindContext);
        })
        .catch(function() {
            res.status(500).json({ errorMessage: 'could not update the context' });
        });
});

server.delete('/context/:id', function(req, res) {
    const { id } = req.params.id;

    const context = knex('context')
        .where('id', id)
        .delete()
        .then(function(context) {
            if (!context) throw new Error();
            res.status(200).json(context);
        })
        .catch(function() {
            res.status(500).json( {errorMessage: 'You did not delete the context' });
        });
});


const port = 3000;
server.listen(port, () => {
    console.log(`server running at ${port}`);
})