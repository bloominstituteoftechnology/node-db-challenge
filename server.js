const express = require('express');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const knex = require('knex');

//Server Instantiation
const appServ = express();

//Third party middleware
//express.json returns json objects of the response
//All global middlewares that will be used across enpoints must also be plugged into the app
//cors and helmet middlewares are not used
appServ.use(express.json(), logger('combined'), cors(), helmet());

//Import(require) knexfile & Instantiate a database object using knex
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

//Root Request/Route Handler
appServ.get('/', (req, res) => {
    res.send('Test for root endpoint!')
});

//Post for Adding Projects Endpoint
appServ.post('/api/projects',(req, res) => {
    const {name, description} = req.body;
    const project = {name, description};
    if (!project) res.status(400).json({ error: 'Please provide a project' });
      db.insert(project)
        .into('projects')
            .then(ids => res.status(201).json( ids))
                .catch(err => res.status(500).json({ error: 'Project cannot be saved' }));
  });

  //POST for Adding Actions Enpoint
  appServ.post('/api/actions',(req, res) => {
    const {description, notes, project_id} = req.body;
    const action = {description, notes, project_id};
  
    if (!action) res.status(400).json({ error: 'Please provide an action' });
      db.insert(action)
        .into('actions')
            .then(ids => res.status(201).json( ids ))
      .         catch(err => res.status(500).json({ error: 'Action not           saved' }));
  });

  //GET for Retrieving a Project by It's Id
  appServ.get('/api/projects/:id', (req, res) => {
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


     //Stretch Endpoints

     appServ.get('/api/actions', (req, res) => {
        db('actions')
         .then(actions => 
          res.status(200).json(actions))
         .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
      });
    
//Port & Port Listener
const port = 6000;
appServ.listen(port, () => console.log(`\n Listening on ${port}`));