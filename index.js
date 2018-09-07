const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json()); // don't forget this

// function getProjectActions(projectId) {
//     return db('actions as a')
//     .join('projects as p', 'p.id', 'a.projectId')
//     .select('a.id', 'a.text', 'p.name as projectName')
//     .where('a.projectId', projectId);
//     } 

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
// server.get('/api/projects/:id', (req,res) => {
//     const id = req.params.id;
//     db('projects')
//     .where('id', '=', id)
//     .then(project => {
//     if (project.length == 0) {
//     res.status(404).json({message: "Cannot find corresponding record "})
//     }
//     res.status(200).json(project);
//     })
//     .catch(err => res.status(500).json({message: "There was an error looking for the specified record"}));
// })

//PUT Request
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

//DELETE Request
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

// - - - - - - - - Get Actions by Project - - - - -

// server.get('/api/projects/actions/:projectId', (req,res) => {
//     const projectId = req.params.projectId;
    
//     db
//     .getProjectActions(projectId) 
//     .then(projectActions => {
//         if (projectActions === 0){
//             res.status(404).json({message: 'Unable to find specified record'});
//             return;
//         }
//         res.json(projectActions);
//     })
//     .catch(error => {
//         res.status(500).json({message: 'problem encountered in database'});
//         return;
//     });
// });

server.get('/api/projects/:id', (req,res) => {
    const {id} = req.params;
    db('projects')
        .where({id})
        .first()
        .then(project => {
            if (project) {
                db('actions')
                .where({projectId: id})
                .then(actions => {
                    project.actions = actions;

                    res.status(200).json(project);
                })
                .catch(err => res.json(err));
            }else{
                res.status(404).json({message: "The record you are looking for was not found"})
            }
        })
        .catch(err => res.json(err));
});

// - - - - - - - - Actions Endpoints - - - - - - - - 

//POST REQUEST
server.post('/api/actions', (req, res) => {
    const action = req.body;
    // console.log(project);
    db.insert(action)
    .into('actions')
    .then(id => {
    res.status(201).json(id);
    })
    .catch(err => res.status(500).json(err));
    });

//GET ALL REQUEST
server.get('/api/actions', (req, res) => {
    db('actions')
    // .select('name')
    .then(actions => {
    res.status(200).json(actions);
    })
    .catch(err => res.status(500).json(err));
    });

//GET Request for individual record
server.get('/api/actions/:id', (req,res) => {
    const id = req.params.id;
    db('actions')
    .where('id', '=', id)
    .then(action => {
    if (action.length == 0) {
    res.status(404).json({message: "Cannot find corresponding record"})
    }
    res.status(200).json(action);
    })
    .catch(err => res.status(500).json({message: "There was an error looking for the specified record"}));
})

//PUT Request
server.put('/api/actions/:id', (req,res) => {
    const changes = req.body;
    const id = req.params.id;
    db('actions')
        .where('id', '=', id)
        .update(changes)
        .then(count => { //tells the number of records updated
        res.status(200).json(count);
        })
        .catch(err => {
        res.status(500).json(err);
        });
    });

//DELETE Request
server.delete('/api/actions/:id', (req, res) => {
    const id = req.params.id;
    db('actions')
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






server.listen(9000);