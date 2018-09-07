const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./db/dataModel');

const server = express();

server.use(express.json());
server.use(helmet());

// projects endpoints
server.get('/api/projects', async (req, res) => {
    try {
        const response = await db.getProjects();
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.get('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.getProject(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.post('/api/projects', async (req, res) => {
    const { name, description, completed } = req.body;
    try {
        const response = await db.addProject({name, description, completed});
        res.status(201).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.put('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    try {
        const response = await db.updateProject(id, {name, description, completed});
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.delete('/api/projects/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.deleteProject(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

// actions endpoints
server.get('/api/actions', async (req, res) => {
    try {
        const response = await db.getActions();
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.get('/api/actions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.getAction(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.post('/api/actions', async (req, res) => {
    const { project_id, description, notes, completed } = req.body;
    try {
        const response = await db.addAction({project_id, description, notes, completed});
        res.status(201).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.put('/api/actions/:id', async (req, res) => {
    const { id } = req.params;
    const { project_id, description, notes, completed } = req.body;
    try {
        const response = await db.updateAction(id, {project_id, description, notes, completed});
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.delete('/api/actions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const response = await db.deleteAction(id);
        res.status(200).json(response);
    } catch (ex) {
        res.status(500).json(ex);
    }
})

server.listen(4050, console.log('\n=== Server listening on port 4050 ===\n'));