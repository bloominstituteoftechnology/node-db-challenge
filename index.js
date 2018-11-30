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

server.post('/api/portfolios', (req, res) => {
    const portfolio = req.body
    db('portfolios').insert(portfolio)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'Error Posting New Portfolio', err }))
});

server.post('/api/junction', (req, res) => {
    const junction = req.body
    db('junction').insert(junction)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'Error Posting New Junction IDs', err }))
});

server.get('/projects/actions/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const projects = await db('projects')
        .join('portfolios', 'portfolios.id', '=', 'projects.portfolio_id')
        .where('projects.id', '=', id)
        .first();
        

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

server.get('/api/projects', (req, res) => {
    db('projects')
    .then(project => res.status(200).json(project))
    .catch(error => res.status(500).json({ message: `Can't Retrieve project Data`, error }))
});

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(action => res.status(200).json(action))
    .catch(error => res.status(500).json({ message: `Can't Retrieve action Data`, error }))
});

server.get('/api/junction', (req, res) => {
    db('junction')
    .then(junction => res.status(200).json(junction))
    .catch(error => res.status(500).json({ message: `Can't Retrieve junction Data`, error }))
});

server.put('/api/projects', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('projects')
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json({ count })
    })
    .catch(error => res.status(500).json({ message: `Could Not Implement '${changes}'`, error }))
});

server.put('/api/actions', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('actions')
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json({ count })
    })
    .catch(error => res.status(500).json({ message: `Could Not Implement '${changes}'`, error }))
});

server.put('/api/portfolios', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('portfolios')
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json({ count })
    })
    .catch(error => res.status(500).json({ message: `Could Not Implement '${changes}'`, error }))
});

server.put('/api/junction', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    db('junction')
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json({ count })
    })
    .catch(error => res.status(500).json({ message: `Could Not Implement '${changes}'`, error }))
});

server.delete('/api/actions/:id', (req, res) => {
    const { id } = req.params;

    db('actions')
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.delete('/api/projects/:id', (req, res) => {
    const { id } = req.params;

    db('projects')
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.delete('/api/junction/:id', (req, res) => {
    const { id } = req.params;

    db('junction')
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});

server.delete('/api/portfolio/:id', (req, res) => {
    const { id } = req.params;

    db('portfolio')
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json({ count });
    })
    .catch(err => res.status(500).json(err));
});








const port = 7777;
server.listen(port, function() {
    console.log(`\n=== Web Api Listening @ http://localhost:${port} ===\n`);
})