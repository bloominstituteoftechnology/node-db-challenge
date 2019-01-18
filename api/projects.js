const express = require('express');
const knex = require('knex')
const knexConfig = require ('../knexfile.js');
const helper = require('./helper/helpers')
const router = express.Router ();

router.post('/',(req,res)=>{
    const body = req.body
    helper.createProject(body)
    .then(project =>{
        res.status(201).json(project)
    })
    .catch(err =>{
        res.status(500).json({errorMessage: 'error making the project'})
    })
})

module.exports = router;