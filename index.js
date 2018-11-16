const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({message: 'server is up on post:9000'})
})

server.get('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await db('projects').first();

        const actions = await db('actions').where('project_id', id);
        res.status(200).json({...project, actions});

    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/projects', async (req, res) => {
    try {
        const project = req.body;
        console.log('project', project);

        if (!project.name || !project.description) {
            res.status(400).json({message: 'Name and description required'})
            return;
        }

        const id = await db('projects').insert(project);

        res.status(201).json({project_id: id});
    } catch(error) {
        res.status(500).json(error);
    }
})

server.post('/api/actions', async (req, res) => {
    try {
        const action = req.body;

        if (!action.note || !action.description || !action.project_id) {
            res.status(400).json({message: 'description, note and project_id required'})
            return;
        }

        const project = await db('projects').where('id', action.project_id);
        
        if (!project.length) {
            res.status(400).json({message: 'project with that id does not exist'})
            return;
        }

        const id = await db('actions').insert(action);

        res.status(201).json({action_id: id});
    } catch(error) {
        res.status(500).json(error);
    }
})


server.listen(9000, () => console.log('\nServer Listening on port: 9000\n'));

