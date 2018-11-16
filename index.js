const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');

const server = express();


server.use(express.json(), logger('combined'), cors(), helmet());

const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

server.get('/', (req, res) => {
    res.send('Test for root endpoint!')
});

//Projects Post
server.post('/api/projects',(req, res) => {
    const {name, description, completed} = req.body;
    const project = {name, description, completed};
    if (!project) res.status(400).json({ error: 'Please provide a project' });
      db.insert(project)
        .into('projects')
            .then(ids => res.status(201).json( ids))
                .catch(err => res.status(500).json({ error: 'Project cannot be saved' }));
  });

//GET Project By ID
server.get('/projects/:id', (req, res) => {
    const { id } =  req.params.id;
    db('projects')
    .select()
            .where({ id })
                .then(projects => {
                    if(project) {
                        res.status(200).json(projects);
                    } else {
                            res.status(404).json({error: 'Cannot retrieve project with specified ID'});
            }
        })
        .catch(error => res.status(500).json({ error: 'Cannot retrieve project information'}));
    });

//Actions Post
server.post('/api/actions',(req, res) => {
    const {description, notes, project_id} = req.body;
    const action = {description, notes, project_id};

    if (!action) res.status(400).json({ error: 'Please provide an action' });
    db.insert(action)
        .into('actions')
            .then(ids => res.status(201).json( ids ))
    .         catch(err => res.status(500).json({ error: 'Action not saved' }));
  });

// stretch 
// get actions

server.get('/api/actions', (req, res) => {
    db('actions')
    .then(actions => 
    res.status(200).json(actions))
    .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
});
//get projects

server.get('/api/projects', (req, res) => {
    db('projects') 
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json( `${err}: 'Projects cannot be retrieved'`));
    });  

//Port 
const port = 7777;
server.listen(port, () => console.log(`\n Listening on ${port}`));