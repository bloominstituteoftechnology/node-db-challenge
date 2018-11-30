const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

// const projectsDB = require('./data/projectdbConfig.js');
// const actionsDB = require('./data/actionsdbConfig.js');

//const db = knex(knexConfig.development);

const server = express();

server.use(express.json());

//ENDPOINTS

//GETS
server.get('/projects', (req, res) => {
  db('projects')
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err))
})

server.get('/actions', (req, res) => {
  db('actions')
    .then(actions => res.status(200).json(actions))
    .catch(err => res.status(500).json(err))
})

//GET PROJECT BY ID w structure
server.get('/projects/:id', (req, res) => {
  const { projectid } = req.params;

  db('projects')
/*       .where({ id: projectid })
      .then(project => {
        actionsDB.getActions('actions')
        .where({ projectNum : projectid})
        console.log(projectid)
        .then(action => {
          return res.status(201).json({...project, actions})
        })
        .catch(err => {
          return res.status(500).json({message: 'error finding project', err})
        })
      }) */
      
    // .where({id: projectid})
    // .then(projects => res.status(200).json(projects))
    // .catch(err => res.status(500).json(err))
    // .then(action => {
    //   return res.status(201).json({...project, actions:action})
    // })
    // .catch(err => {
    //   return res.status(500).json({message: 'error finding project', err})
    // })
})

//POSTS
server.post('/projects', (req, res) => {
  const project = req.body;

  db('projects')
    .then(project => {
      res.status(201).json({message: 'project added', project})
    })
    .catch(err => {
      res.status(500).json({message: 'error inserting project', err})
    })
});

server.post('/actions', (req, res) => {
  const action = req.body;

  db('actions')
    .insert(action)
    .then(ids => {id: ids[0]} )
    .then(action => {
      res.status(201).json({message: 'action added', action})
    })
    .catch(err => {
      res.status(500).json({message: 'error inserting action', err})
    })
});


//server running GET
server.get('/', (req, res) => {
  res.json({ api: 'server 7777 up and running!' });
});

server.listen(7777, () => console.log('\n== Port 7(repeat 4 *) ==\n'));