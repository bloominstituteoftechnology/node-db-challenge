const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const server = express();
server.use(express.json());

const db = knex(knexConfig.development);

server.get('/', (req, res) => {
    res.status(200).json({ message: 'At root' });
});

server.post('/api/projects', async (req, res) => {
    const newProject = req.body;
    try {
        const returned = await db('projects').insert(newProject);
        res.status(200).json(returned);
    } catch(err) {
        res.status(500).json(err);
    }
});

server.post('/api/actions', async (req, res) => {
    const newAction = req.body;
    try {
        const returned = await db('actions').insert(newAction);
        res.status(200).json(returned);
    } catch(err) {
        res.status(500).json(err);
    }
});

server.get('/api/projects', async (req, res) => {
    try {
        const projects = await db('projects');
        res.status(200).json(projects);
    } catch(err) {
        res.status(500).json(err);
    }
});

server.get('/api/actions', async (req, res) => {
    try {
        const actions = await db('actions');
        res.status(200).json(actions);
    } catch(err) {
        res.status(500).json(err);
    }
});

server.get('/api/projects/:id', async (req, res) => {
    const project_id = req.params.id;
    try {
        const projectArr = await db('projects').where({ id: project_id });
        const project = projectArr[0];
        const actionsForProj = await db('actions').where({ project_id: project_id });
        project.actions = actionsForProj;
        res.status(200).json(project);
    } catch(err) {
        res.status(500).json(err);
    }
});

const port = 9000;
server.listen(port, () => console.log(`\nServer up on port ${port}\n`));