const express = require('express');

const db = require('./data/dbHelpers');

const server = express();

server.use(express.json());

//get all projects listed
server.get('/projects', async (req, res) => {
    try {
        const projects = await db.getAllProjects();
        res.status(200).json(projects)
    } catch (e) {
        res.status(500).json(e)
    }
})

//get project by id
server.get('/projects/:id', async (req, res) => {
    try {
        const projs = await db.getProjectsById(req.params.id)

        if(projs) {
            res.status(200).json(projs);
        } else {
            res.status(404).json({message: 'not found'})
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

//get all actions listed
server.get('/actions', async (req, res) => {
    try {
        const actions = await db.getAllActions();
        res.status(200).json(actions)
    } catch (e) {
        res.status(500).json(e)
    }
})

//get action by id
server.get('/actions/:id', async (req, res) => {
    try {
        const action = await db.getActionsById(req.params.id)

        if(action) {
            res.status(200).json(action);
        } else {
            res.status(404).json({message: 'not found'})
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

// server.get('/projects/:id/actions', (req, res) => {
//     try {

//     } catch (e) {
//         res.status(500).json(e)
//     }
// })

//post new project to projects table
server.post('/projects', async (req,res) => {
    try {
        if(req.body.project_name && req.body.description) {
            const newProj = await db.addProject(req.body);
            res.status(200).json(newProj)
        } else {
            res.status(500).json({
                message: 'Your missing some info dude'
            })
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

//post new action to actions table
server.post('/actions', async (req,res) => {
    try {
        if(req.body.action && req.body.notes) {
            const newAction = await db.addAction(req.body);
            res.status(200).json(newAction)
        } else {
            res.status(500).json({
                message: 'Your missing some info dude'
            })
        }
    } catch (e) {
        res.status(500).json(e)
    }
})

server.listen(3300, () => {
    console.log('server running on port number 3300...')
});