const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile.js')

const db = knex(dbConfig.development);

const server = express();

server.use(express.json());
server.use(helmet());

// endpoints here



//---------GET REQUESTS-------//

//-----obligatory welcome----///
server.get('/', (req, res) => {
  db('projects')
  .then( projects => {
    res.status(200).send("welcome pilgrim");
  })
})

//All:

server.get('/api/projects', (req, res) => {
  db('projects')
  .then( projects => {
    res.status(200).json(projects);
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json(err)
  })
})

server.get('/api/actions', (req, res) => {
  db('actions')
  .then( projects => {
    res.status(200).json(projects);
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json(err)
  })
})
//BY ID:

server.get('/api/projects/:id', (req,res) => {
  const {id} = req.params;
  db('projects')
      .where({id})
      //resolve the first entry in the column to get the project id and later to chain to actions
      .first()
      .then(project => {
        if(project){
          db('actions')
          .where({project_id: id})
              .then(action => {
                  project.action =action;
                  res.status(200).json(project);
      })
      .catch(err =>{
        console.log(err)
        res.status(500).json(err)
      })
    }
  })
})

//Get actions and project
server.get('api/project/actions/:id', (req,res) => {
  const  id  = req.params.id;

  db
  .getActionsOfProject(id)
  .then(project => {
    res.status(200).json(project)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err)
  })
})

server.get('/api/actions/:id', (req, res) => {
  const  {id} = req.params;
  db('actions')
  .select()
  .where('id', id)
  .then( projects => {
    res.status(200).json(projects);
  })
  .catch(err =>{
    console.log(err)
    res.status(500).json(err)
  })
})

//----POST ------//

server.post( '/api/projects', (req, res) => {
  const zoo = req.body;

  db.insert(zoo)
  .into('projects')
  .then(projects => {
    res.status(201).json(projects);
  })
  .catch(err => {
    res.status(500).json(err);
  })
})

//-------DELETE------------//

server.delete('/api/projects/:id', (req, res) => {
  const { id } = req.params;
   db('projects')
   .where({ id })
   .del()
   .then( projects => {
     res.status(200).json(projects);
   })
   .catch(err => {
     console.log(err)
     res.status(500).json(err)
   })
})

//-------------PUT-----------//
server.put('/api/projects/:id', (req, res) => {
  const { id } = req.params;
  const name = req.body;

  db('projects')
  .where( { id })
  .update(name)
  .then( projects => {
    res.status(200).json(projects)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json(err);
  })
});



const port = 8000;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
