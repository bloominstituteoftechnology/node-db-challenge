const express = require('express');
const router = express.Router();

const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);


//middleware
router.use(express.json());

router.get('/', (req, res) => {
    db('projects')
      .then(projects => {
        res.status(200).json(projects);
      })
      .catch(err => res.status(500).json(err));
  });

//endpoints

router.get('/:id/actions', (req, res) => {
    db('projects')
      .innerJoin('actions', 'project.id', '=', 'actions.projects_id')
      .then(actions => {
        res.status(200).json(actions)
    })
});

router.get('/:id/actions', (req, res) => {
    const id = req.params.id - 1;
    db('projects').get(id).then(action => {
        res.status(201).json(action)
        
    }).catch(err => res.status(500).json(err))
});

router.post('/', (req, res) => {
    db('projects')
    .insert(req.body)
    .then(project => {
        res.status(201).json(project)
    }).catch(err => res.status(500).json({ message: "something is going wrong, bro"}))
});





module.exports = router;