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
});

router.put('/api/actions/:id', (req,res) => {
     const {id} = req.params;
     const {actions_des, action_notes, isCompleted} = req.body;
     const action = req.body;
     if(!actions_des) res.status(404).json({Message:`You need description for the actions`});
     if(!action_notes) res.status(404).json({Message:`Notes missing ..for the actions`});
     if(!isCompleted) res.status(404).json({Message:`True action? or False?? choose one`});

     db('actions')
     .where('id', id)
     .update(action)
     .then( newAction => {
         res.status(201).json({newAction})
     })
     .catch( err => {
        res.status(500).json({errorMessage: `Actions with this ID ${id} cannot be updated`})
     })
});

router.delete('/api/actions/:id', (req,res) => {
    const {id} = req.params;
    db('actions')
    .where('id',id)
    .del()
    .then( count => {
        if(!count) {
            res.status(404).json({ Message: `There is no project with this ID ${id}`});
        } else {   
             res.status(201).json({Message:`Successfully deleted the project with the ID ${id}`});
        }    
    })
    .catch( err => {
       res.status(500).json({Message:`Failed to delete the project with the ID ${id}`});
    })
});






module.exports = router;