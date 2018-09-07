const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json()); // don't forget this

//start server
server.get('/', (req, res) => {
res.send('API Running...');
});

// - - - - - - - - Project Endpoints - - - - - - - - 

//POST REQUEST
server.post('/api/projects', (req, res) => {
    const project = req.body;
    // console.log(project);
    db.insert(project)
    .into('projects')
    .then(id => {
    res.status(201).json(id);
    })
    .catch(err => res.status(500).json(err));
    });

//GET ALL REQUEST
server.get('/api/projects', (req, res) => {
    db('projects')
    // .select('name')
    .then(projects => {
    res.status(200).json(projects);
    })
    .catch(err => res.status(500).json(err));
    });

//GET Request for individual record
server.get('/api/projects/:id', (req,res) => {
    const id = req.params.id;
    db('projects')
    .where('id', '=', id)
    .then(project => {
    if (project.length == 0) {
    res.status(404).json({message: "Cannot find corresponding record "})
    }
    res.status(200).json(project);
    })
    .catch(err => res.status(500).json({message: "There was an error looking for the specified record"}));
})

    server.put('/api/projects/:id', (req,res) => {
        const changes = req.body;
        const id = req.params.id;
        db('projects')
            .where('id', '=', id)
            .update(changes)
            .then(count => { //tells the number of records updated
            res.status(200).json(count);
            })
            .catch(err => {
            res.status(500).json(err);
            });
        });


    server.delete('/api/projects/:id', (req, res) => {
        const id = req.params.id;
        db('projects')
            .where('id', '=', id)
            .del()
            .then(count => {
            // count === number of records deleted
            res.status(200).json(count);
            })
            .catch(err => {
            res.status(500).json(err);
            });
        });

// - - - - - - - - Actions Endpoints - - - - - - - - 

server.listen(9000);