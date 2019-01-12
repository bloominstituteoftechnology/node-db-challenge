const express = require('express');
const db = require('../data/dbConfig.js');

const parser = express.json();
const router = express.Router();

router.use(parser)

//endpoint

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

module.exports = router;