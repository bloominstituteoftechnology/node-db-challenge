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
    const {name, description, completed} = req.body;
    const project = {name, description, completed};
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


// get project by ID
   appServ.get('/api/projects/:id', (req, res) => {
    const {id} = req.params;
     db('projects')
        .where('id', id)
            .then(project => {
                if(!project) {
                    res.status(404).json({error: `Could not find project with ID ${id}`})
        }
        db('actions')
            .where('project_id', id)
                .then(actions => {
                    project[0].actions = actions;
            
                        res.status(200).json(project)
         })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({error: `An error occured retrieving project ${id}.`})
        });
    });
});



     //Stretch Endpoints

     appServ.get('/api/actions', (req, res) => {
        db('actions')
         .then(actions => 
          res.status(200).json(actions))
         .catch(err => res.status(500).json({ error: 'Actions not retrieved'}));
      });
    

    //projects endpoints
    appServ.get('/api/projects', (req, res) => {
    db('projects') 
     .then(projects => res.status(200).json(projects))
     .catch(err => res.status(500).json( `${err}: 'Projects cannot be retrieved'`));
    });  


//Port & Port Listener
const port = 6000;
appServ.listen(port, () => console.log(`\n Listening on ${port}`));