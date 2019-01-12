const express = require("express");
const knex = require("knex");
const server = express(); 
const dbConfig = require('./knexfile');
const db = knex(dbConfig.development); 
const PORT = 4000;

server.use(express.json());

server.get('/api/projects', (req, res) => {
    
    db('projects').then(id => {
      res.status(201).json(id); 
    })
    .catch(err => { res.status(500).json({err: "there was an error"})
  })
})

server.get('/api/projects/:id', (req, res) => {
    const {id} = req.params
    db('projects').where('id',id).first().then(project => {
      if(project){
          db('actions').where('project_id',id)
          .then(actions =>{
              project.actions=actions;
              res.status(200).json(project)
          })
      }else{
        res.status(400).json({err : 'Failed to find project'})
      }
    })
    .catch(err => { res.status(500).json({err: "there was an error"})
  })
})


server.post('/api/projects', (req, res) => {
    const content = req.body
    db('projects').insert(content).then( id => {
      res.status(200).json(id)
    })
    .catch(err => { res.status(500).json({err: "there was an error"})
  })
})

server.post('/api/actions', (req, res) => {
    const content = req.body
    db('actions').insert(content).then( id => {
      res.status(200).json(id)
    })
    .catch(err => { res.status(500).json({err: "there was an error"})
  })
})


server.listen(PORT, () => {
    console.log("server is running in port " + PORT)
})