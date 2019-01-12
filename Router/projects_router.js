const express = require('express');
const db = require('../data/dbConfig.js');

const parser = express.json();
const router = express.Router();

router.use(parser)

//endpoint

// router.get('/', (req, res)=>{

// })

router.get('/:id',(req, res)=>{
  const { id } = req.params
  db('projects')
  .where({id: id})
  .then(project => {
    db('actions')
    .where({ project_id: id})
    .then(action => {
      return res.status(200)
      .json({ ...project, actions: action });
    })
  })
  .catch(err =>{
    res
    .status(500)
    .json({message:'unable to retrieve specified id to database'})
  })
})

// post a project to the database
router.post('/', (req, res) =>{
  const project = req.body
  db('projects').insert(project)
  .then(ids =>{
    res
    .status(201)
    .json(ids)
  })
  .catch(err =>{
    res
    .status(500)
    .json({message:'unable to save information to database'})
  })
})

// router.put('/:id',(req, res)=>{

// })

// router.delete('/:id',(req, res)=>{

// })




module.exports = router;