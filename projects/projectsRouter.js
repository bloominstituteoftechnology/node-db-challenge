const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


//middleware
router.use(express.json());

//endpoints
router.get('/', (req, res) => {
    db('projects').then(projects => {
        res.status(200).json({projects});

    }).catch(err => {
        res.status(400).json(err)
    })
    
})

router.get('/:id', (req, res) => {
    const id = req.params.id-1
    db('projects').get(id).then(project => {
        res.status(201).json(project)
        
    }).catch(err => res.status(500).json(err))
});


router.post('/', (req, res) => {
    db('projects')
    .insert(req.body)
    .then(project => {
        res.status(201).json(project)
    }).catch(err => res.status(500).json({ message: "something is going wrong, bro"}))
});

router.delete('/:id', (req, res) => {
    const id = req.params.id -1;
    db('projects').get(id)
      .then(project => {
        if(project) {
          db('projects').remove(id).then(count => {
            res.status(200).json(project);
        });
        } else {
          res
            .status(404)
            .json({ message: 'The project with the specified ID does not exist'});
      }
    })
      .catch(err => res.status(500).json(err))
  })




module.exports = router;