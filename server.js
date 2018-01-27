// todo cascade on update and delete of data 

const express = require('express');
const bodyParser = require('body-parser');
const knex = require('./database/db.js');

const server = express();

server.use(bodyParser.json());

// endpoints here 

server.get('/', (req, res)=>{
    res.send('all good');
});

server.post('/api/projects', (req, res)=> {
    const project = req.body;
    knex.insert(project)
    .into('projects')
    .then((project)=>{
        res.status(200).json({ project })
    })
    .catch(()=> {
        res.status(500).json({ errormessage: 'could not instert the project'});
    })
});

server.put('/api/projects/:id', (req,res)=> {
    console.log('pat');
    const { id } = req.params;
    const { name } = req.body;
    knex('projects')
    .where('id', id)
    .update('name', name)
    .then((project)=> {
      res.status(200).json(project);
    })
    .catch(()=> {
      res.status(500).json({error : 'problem getting the record'});
    })
  });

server.get('/api/projects', (req, res)=> {
    knex('projects')
    .then((projects) =>{
        res.status(200).json(projects);
    })
    .catch(() => {
        res.status(500).json({errormessage: 'could not find any records'});
    });
});

server.get('/api/projects/:id', (req,res) => {
    const { id } = req.params;
    knex('projects')
    .where('id', id)
    .then((record) => {
        res.status(200).json(record);
    }) 
    .catch(() => {
       res.status(500).json({error:'there was a problem finding the record'});
    })
});

server.delete('/api/projects/:id', (req,res)=> {
    console.log('pat');
    const { id } = req.params;
    knex('projects')
    .where('id', id)
    .del()
    .then((project)=> {
      res.status(200).json(project);
    })
    .catch(()=> {
      res.status(500).json({error : 'problem getting the record'});
    })
  });

server.listen(3000, function(){console.log('server running on port 3000')});