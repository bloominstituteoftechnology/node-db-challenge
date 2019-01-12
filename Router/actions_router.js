const express = require('express');
const db = require('../data/dbConfig.js');

const parser = express.json();
const router = express.Router();

router.use(parser)

//endpoint

// router.get('/', (req, res)=>{

// })

// router.get('/:id',(req, res)=>{

// })

router.post('/', (req, res) =>{
  const action = req.body
  db('actions').insert(action)
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