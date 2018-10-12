const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);


const server = express();

server.use(helmet());
server.use(morgan('combined'));
server.use(express.json());

const port = 9000;

server.post('/api/projects', (req, res)=> {
    const project = req.body;
    db.insert(project)
    .into('projects')
    .then(ids=> {
        res.status(201).json(ids);
    })
    .catch(err=> {
        res.status(500).json(err);
    })
});

server.post('/api/actions', (req, res)=> {
    const action = req.body;
    db.insert(action)
    .into('actions')
    .then(ids=> {
        if (!action) {
            res.status(400).json({message: "BAD REQUEST: Please include all required information"});
        } else if (!ids) {
            res.status(404).json({message: "There is nothing to display"});
        } else {
            res.status(201).json(ids); 
        }
    })
    .catch(err=> {
        res.status(500).json(err);
    })
});

server.get('/api/projects/:project_id/actions', (req, res)=> {
    const {project_id} = req.params;
    db.from('projects').innerJoin('actions', 'actions.project_id', 'projects.id')
        .where({project_id})
        .then(projectActions=> {
           if (projectActions === 0) {
               res.status(404).json({message: "The information you requested does not exist"});
           } else if (!project_id) {
               res.status(400).json({message: "BAD REQUEST: please provide the appropriate information"});
           }
           res.status(200).json(projectActions);
        })
        .catch(err=> {
            res.status(500).json({error: "This information could not be retrieved from the database"});
        })
});


server.listen(port, ()=> console.log(`API running on port ${port}`));