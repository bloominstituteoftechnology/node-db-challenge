const express = require('express');
const knex = require('knex');
const router = express.Router();

//Knex
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);

router.get('/api/actions', (req,res) => {
  db('actions')
  .then( action => {
      if(!action) {
          res.status(404).json({errorMessage:`Failed to the project actions now`})
      }
      // console.log(project);
      res.json(action);
  })
  .catch(err => {
         res.status(500).json({error:`Failed to fetch the projects`});
  });
});

router.post('/api/actions', (req,res) => {
     const action = req.body;
     if(!action) res.status(404).json({Message: `Please enter a valid action to create a new action`});
     db('actions')
     .insert(action)
     .then( newAction => {
         res.status(201).json(newAction);
     })
     .catch(err => {
      res.status(500).json({error:`Failed to create a new action at this time`});
    });
})





module.exports = router;