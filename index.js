const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.json({ api: 'Running' });
});

server.post('/api/project', (req, res) => {
    const project = req.body
    db('project').insert(project)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'There was a server error when trying to post project. Please try again.', err }))
});

server.post('/api/action', (req, res) => {
    const action = req.body
    db('actions').insert(action)
    .then(ids => {
        res.status(201).json(ids)
    })
    .catch(err => res.status(500).json({ message: 'There was a server error. Please try again.', err }))
});

server.get('/project/action/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const project = await db('project')
            .join('action', 'action.id', '=', 'project.id')
            .where('project.id', '=', id);

        const action = await db('PandAJoinTable')
            .join('action', 'PandAJoinTable.action_id', '=', 'action.id')
            .where('PandAJoinTable.project_id', '=', id)

            return project
                ? res.status(200).json({ ...project, action })
                :res.status(500).json({ message: "Ya Gone F'd Up" })
    } catch (error) {
        res.status(500).json({ message: 'You gane and Broke it.', error })
    }
});

const port = 7777;
server.listen(port, function() {
    console.log(`The Server Is Listening @ localhost:${port}`);
}) 