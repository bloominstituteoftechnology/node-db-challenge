const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');

const server = express();


server.use(express.json(), logger('combined'), cors(), helmet());

server.get('/', (req, res) => {
    res.send('Test for root endpoint!')
});

//Projects Post
server.post('/projects',(req, res) => {
    const {project} = req.body;
    if (!project) res.status(400).json({ error: 'Please provide a project' });
    db
    .insert({ project })
    .into('projects')
    .then(ids => res.status(201).json( ids))
    .catch(err => res.status(500).json({ error: 'Project cannot be saved' }));
});

//Actions Post
server.post('/actions',(req, res) => {
    const {action} = req.body;

    if (!action) res.status(400).json({ error: 'Please provide an action' });
    db.insert({ action })
    .into('actions')
    .then(ids => res.status(201).json( ids ))
    .catch(err => res.status(500).json({ error: 'Action not saved' }));
});

//Port 
const port = 7777;
server.listen(port, () => console.log(`\n Listening on ${port}`));