const express = require('express');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);

const server = express();

server.use(express.json());



//endpoints for projects

//===GETS ALL PROJECTS===
server.get('/api/projects', (req, res) => {
    db('projects')
      .then(project => res.status(200).json(project))
      .catch(err => res.status(500).json(err));
  });


//===GETS PROJECTS BY ID===
  server.get('/api/projects/:id', (req, res) => {
    const { id } = req.params;
     db('projects')
        .where({ id })
        .then(project => {
            db('actions')
                .where({ projectId: id })
                .then(action => {
                    return res.status(200).json({ ...project, actions: action });
                });
        })
        .catch(() => {
            return res.status(500).json({ Error: "Project info could not be retrieved." })
        });

    });


//===ADDS NEW PROJECT===
server.post('/api/projects', (req, res) => {
    const project = req.body;

    db('projects')
        .insert(project)
        .returning('id')
        .then(ids => {
            res.status(201).json({message: 'successfuly added project with the id of...', ids});
        })
        .catch(error => {
            res.status(500).json({message: 'error inserting', error})
        })
});


//endpoints for actions

//===AADDS NEW ACTION===
server.post('/api/projects/actions', (req, res) => {
    const action = req.body;

    db('actions')
        .insert(action)
        .returning('id')
        .then(ids => {
            res.status(201).json({message: 'successfuly added action with the id of...', ids});
        })
        .catch(error => {
            res.status(500).json({message: 'error inserting', error})
        })
});


//test endpoint
server.get('/', (req, res) => {
    res.json({ api: 'up' });
  });
  

//defines port  
  server.listen(9000, () => console.log('\n== Port 9k ==\n'))