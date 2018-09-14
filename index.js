const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const server = express();
const db = require('./db/helpers');

server.use(express.json);
server.use(helmet());

server.get('/', (req, res) => {
    res.send('working')
});

// project endpoints

server.get('/projects', async (req, res) => {
    try {
        const projects = await db.getProjects();
        res.status(200).json(projects);
    }
    catch (err) {
        res.send(500).json(err);
    }
});

server.get('/projects/:id', async (req, res) => {
    const { id } = req.params
    try {
        const projects = await db.getProjects(id);
        res.status(200).json(project);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

server.post('/projects', async (req, res) => {
    const { name, description, completed } = req.body;
    try {
        const response = await db.addProject({ name, description, completed });
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.put('/projects/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    try {
        const response = await db.updateProject(id, { name, description, completed });
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.delete('/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.deleteProject(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

//action endpoints

server.get('/actions', async (req, res) => {
    try {
        const actions = await db.getActions();
        res.status(200).json(actions);
    }
    catch (err) {
        res.send(500).json(err);
    }
});

server.get('/actions/:id', async (req, res) => {
    const { id } = req.params
    try {
        const actions = await db.getActions(id);
        res.status(200).json(actions);
    }
    catch (err) {
        res.status(500).json(err);
    }
});

server.post('/actions', async (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    try {
        const response = await db.addActions({ project_id, description, notes, completed });
        res.status(201).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.put('/actions/:id', async (req, res) => {
    const { id } = req.params;
    const { project_id, description, notes, completed } = req.body;
    try {
        const response = await db.updateActions(id, { project_id, description, notes, completed });
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

server.delete('/actions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.deleteActions(id);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json(err);
    }
});

const port = 8000
server.listen(port, console.log(`\n ===> Server is running on port ${port} <=== \n`));