const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
    res.json({ api: 'server is running!'});
})

// server.get('/api/projects/:id/actions', (req, res) => {
//     const { id } = req.params;
//     db('actions')
//     .join('projects', 'projects.id', '=', 'actions.project_id')
//     .select('projects', 'actions')
//     .where('actions.project_id', id)
//     .then(actions => actions.map(action => ({ action }))
//     .then(res.status(200).json(actions)))
//     .catch(error => res.status(500).json({ message: "Could not retrieve projects and actions"}))
// })

server.get('/api/projects/:id/actions', async (req, res) => {
    const { id } = req.params;
    try {
    const actions = await db('actions').where('project_id', id)
    const projects = await db('projects').where('id', id)
    res.status(200).json({project: {...projects, actions: actions}})
} catch (err){
    res.status(500).json({ err, message: "Could not retrieve projects and actions"})
}
})

server.post('/api/projects', (req, res) => {
    const body = req.body;
    db('projects')
    .insert(body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => res.status(500).json({ message: "Error posting a new project"}))
})

server.post('/api/actions', (req, res) => {
    const body = req.body;
    db('actions')
    .insert(body)
    .then(ids => {
        res.status(201).json(ids);
    })
    .catch(error => res.status(500).json({ message: "Error posting new action"}))
})

const port = 4000;
server.listen(port, function() {
    console.log(`\n API is listening on http://localhost:${port}`)
})