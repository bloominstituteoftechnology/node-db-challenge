const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js')

const port = 3333;
const server = express();
const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());

//Testing Server
server.get('/', (req, res) => {
    res.send('Am I Alive?????'); //YES!
});

//Stretch - GET - Testing Projects & Actions
server.get('/api/projects', (req, res) => {
    db('projects')
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

server.get('/api/actions', (req, res) => {
    db('actions')
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//POST - Projects and Actions
server.post('/api/projects', (req, res) => {
    const project = req.body;

    if(!project) {
        res.status(404).json({error: 'Please Provide Project Name and/or Description'});
    }else {
        db('projects')
            .insert(project)
            .into('projects')
            .then(id => {
                res.status(200).json(id[0]); //why exactly is the [0] needed, it seems to work without it, only difference is that without it the client received an array ([7]) instead of a integer(7).
            })
            .catch(err => {
                res.status(500).json(err);
            })        
    }
});

server.post('/api/actions', (req, res) => {
    const action = req.body;

    if(!action) {
        res.status(404).json({error: 'Please Provide Action Project Id and/or Description'});
    }else {
        db('actions')
            .insert(action)
            // .into('actions') // Does not seem to be needed, is it because it is already determined it's going into the 'actions' database?
            .then(id => {
                res.status(200).json(id[0]);
            })
            .catch(err => {
                res.status(500).json(err);
            })        
    }
});

// //GET - Project ID's Actions
// server.get('/api/projects/:id/actions', (req, res) => {
//     const {id} = req.params;
//      db('actions')
//         .where({project_id: id})
//         .then(projectIdActions => {
//             res.status(200).json(projectIdActions);
//         })
//         .catch(err => {
//             res.status(500).json(err);
//         })   
// });

//GET - Project ID's Actions
server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;

    db('projects')
        .where({id})
        .then(project => {
            db('actions' )
                .where({project_id: id})
                .then(actions => {
                    res.status(200).json({project, actions});
                })
        })
        .catch(err => {
            res.status(500).json(err);
        })   
});


server.listen(port, () => {
    console.log(`\n=== Listening on Port ${port} ===\n`)
}); 