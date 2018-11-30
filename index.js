const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.json({ api: 'Runnin' });
});


server.post('/api/projects', (req, res) => {
    const project = req.body
    db('projects').insert(project)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'Error Posting New Project', err }))
});

server.post('/api/actions', (req, res) => {
    const action = req.body
    db('actions').insert(action)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'Error Posting New Action', err }))
});

server.get('/projects/actions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const projects = await db('projects')
        .join('portfolios', 'portfolios.id', '=', 'projects.portfolio_id')
        .where('projects.id', '=', id);
        

        const actions = await db('junction')
            .join('actions', 'junction.actions_id', '=', 'actions.id')
            .where('junction.projects_id', '=', id)
            
            return projects
            ? res.status(200).json({ ...projects, actions })
            :res.status(500).json({ message: "Ya Gone F'd Up" })
    } catch (error) {
        res.status(500).json({ message: 'error', error })
    }
});








const port = 7777;
server.listen(port, function() {
    console.log(`\n=== Web Api Listening @ http://localhost:${port} ===\n`);
})