const express = require('express');
const server = express();

const morgan = require('morgan');

const knex = require('knex');
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development);

const PORT = 5750;

server.use(
     express.json(),
     morgan('dev')
    );

server.post('/projects', (req, res)=>{
    const newProject = req.body;
    db('projects').insert(newProject)
        .then(project=>{
            res.status(201).json(project)
        })
        .catch(err=>{
            res.status(500).json({err: "we had a problem adding your data"})
        })

})
server.post('/actions', (req, res)=>{
    const newAction = req.body;
    db('actions').insert(newAction)
        .then(action=>{
            res.status(201).json(action)
        })
        .catch(err=>{
            res.status(500).json({err: "we had a problem adding your data"})
        })
})

server.get('/projects/:id', (req, res)=>{
    const {id} = req.params;
    db('projects').where('id',id).first()
        .then(proj=>{
           
                db('actions')
                    .where("project_id", id)
                    .then(actions =>{
                        proj.actions = actions;
                        res.json(proj)
                    })
            
        })
        .catch(err=>{
            res.status(500).json({err:'Trouble grabbing the project you requested'})
        })
});


server.listen(PORT, ()=>{
    console.log(`Server is listenig on port:${PORT}`)
})



