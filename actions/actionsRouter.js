const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


//middleware
router.use(express.json());

//endpoints
router.get('/', (req, res) => {
    db('actions').then(actions => {
        res.status(200).json({actions});

    }).catch(err => {
        res.status(400).json(err)
    })
    
})

router.get('/:id', (req, res) => {
    const id = req.params.id-1
    db('actions').get(id).then(action => {
        res.status(201).json(action)
        
    }).catch(err => res.status(500).json(err))
});


router.post('/', (req, res) => {
    db('actions')
    .insert(req.body)
    .then(action => {
        res.status(201).json(action)
    }).catch(err => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
    const id = req.params.id -1;
    db('actions').get(id)
      .then(action => {
        if(action) {
          db('projects').remove(id).then(count => {
            res.status(200).json(action);
        });
        } else {
          res
            .status(404)
            .json({ message: 'The action with the specified ID does not exist'});
      }
    })
      .catch(err => res.status(500).json(err))
  })




module.exports = router;