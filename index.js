const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

// server.get('/api/projects', async (req, res) => {
//     try {

//     }
    
// })

server.get('/api/projects/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const project = await db('projects').first();

        const actions = await db('actions').where('projects_id', id);
        res.status(200).json({...project, actions});

    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/projects', async (req, res) => {
    try {
        if(req.body.project_name && req.body.description) {
            const newProj = await db.insert(req.body)
            res.status(200).json(newProj)
        } else {
            res.status(500).json({message: 'you are missing some info bro'})
        }
    } catch(error) {
        res.status(500).json(error);
    }
})

server.post('/api/actions', async (req, res) => {
        try {
            if(req.body.action && req.body.notes) {
                const newAct = await db.insert(req.body)
                res.status(200).json(newAct)
            } else {
                res.status(500).json({message: 'you are missing some info bro'})
            }
        } catch(error) {
            res.status(500).json(error);
        }
});


server.listen(3300, () => console.log('\nServer Listening on port: 3300\n'));