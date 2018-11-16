const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);
const server = express();

server.use(express.json());


// ___________ POST Project_______________
//[POST] /api/cohorts This route should save a new cohort to the database.
server.post('/api/cohorts', (req, res) => {
  const cohort = req.body;
  db('cohorts_table')
    .insert(cohort)
    //.returning('id')
    .then(ids => {
      res.status(201).json(ids);
    })

    .catch(err => {
      res.status(500).json({ message: 'Error inserting', err });
    });
});

// ___________ POST Action_______________
//[POST] /api/cohorts This route should save a new cohort to the database.
server.post('/api/cohorts', (req, res) => {
    const cohort = req.body;
    db('cohorts_table')
      .insert(cohort)
      //.returning('id')
      .then(ids => {
        res.status(201).json(ids);
      })
  
      .catch(err => {
        res.status(500).json({ message: 'Error inserting', err });
      });
  });
  

// ___________ GET Projects + GET by ID_______________
//[GET] /api/projects This route will return an array of all cohorts.
//[GET] /api/projects/:id This route will return the cohort with the matching id.

server.get('/api/cohorts', (req, res) => {
  db('cohorts_table')
    .then(cohorts => res.status(200).json(cohorts))
    .catch(err => res.status(500).json(err));
});

server.get('/api/cohorts/:id', (req, res) => {
  const { id } = req.params;
  db('cohorts_table')
  .where({ id:id })
  .then(cohort => { 
    if (!cohort ) { 
    res.status(404).json({ message: "The cohort with the specified ID does not exist." });
    return  
    } else if (!cohort.length) { 
     res.status(404).json({ message: "The cohort with the specified ID does not have any actions yet." });
     return  
     } else if (cohort && cohort.length){ 
    res.status(200).json(cohort);
    return  
    }
  })
  .catch(err => {
    res 
      .status(500)
      .json({ error: "The post information could not be retrieved." });
  });
});


const port = 8800;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
