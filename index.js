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

const port = 8000
server.listen(port, console.log(`\n ===> Server is running on port ${port} <=== \n`));