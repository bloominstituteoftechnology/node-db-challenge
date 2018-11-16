const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server = express();

server.use(express.json());

server.post('/api/projects', (req, res) => {
    const project = req.body;

    if (!project.name) {
        res.status(500).json({ error: 'Please provide name field in body.' });
    } else {
        db('project')
            .insert(project)
            .then(ids => ({ id: ids[0]}))
            .then(id => {
                res.status(201).json(id);
            })
            .catch(err => {
                res.status(500).json({ error: 'There was an error adding the project.', err });
            })
    }
});

server.post('/api/actions', (req, res) => {
    const action = req.body;

    if (!action.description || !action.project_id) {
        res.status(500).json({ error: 'Please provide description and project_id fields in body.' });
    } else {
        db('action')
            .insert(action)
            .then(ids => ({ id: ids[0]}))
            .then(id => {
                res.status(201).json(id);
            })
            .catch(err => {
                res.status(500).json({ error: 'There was an error adding the action.', err });
            })
    }
});



// server.get('/api/project/:projectid', (req, res) => {
  
//     const { projectid } = req.params;

//     db('project')
//         .join('action', 'project.id', '=', 'action.project_id')
        
//         .select('project.id', 'project.name', 'project.description', 'project.completed'  )
//         .select('action.description', 'action.completed', 'action.notes')
//         .where('project_id', projectid)
//         .then(project => {
//             res.status(200).json({ project });
//         })
//         .catch(err => {
//             res.status(500).json({ error: 'Error fetching data.', err });
//         });

// });
    
server.get('/api/project/:projectid', async (req, res) => {
    
    const { projectid } = req.params;
    
    try {
        const project = await db('project').where('id', projectid);
        const actions = await db('action').where('project_id', projectid);
        
        res.status(200).json({ ...project, actions: actions });
    } catch (err) {
        res.status(500).json({ error: 'There was an error fetching the data.', err });
    }

});
    
server.put('/api/project/:projectid', async (req, res) => {
    const { projectid } = req.params;
    const changes = req.body;

    try {
        const count = await db('project').where({ id: projectid }).update(changes);
        
        res.status(201).json(count);
    } catch (err) {
        res.status(500).json({ error: 'There was an error updating the project.', err });
    }
});

server.put('/api/action/:actionid', async (req, res) => {
    const { actionid } = req.params;
    const changes = req.body;

    try {
        const count = await db('action').where({ id: actionid }).update(changes);
        
        res.status(201).json(count);
    } catch (err) {
        res.status(500).json({ error: 'There was an error updating the action.', err });
    }
});

server.listen(3300, () => console.log('Server listening on port 3300.'));