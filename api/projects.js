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

router.get('/',(req,res)=>{
    helper.getProjects()
    .then(projects =>{
        res.status(200).json(projects)
    })
    .catch(err=>{
        res.status(500).json({errorMessage: 'error retrieving projects'})
    })
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    helper.getProjectById(id)
        .then(project => {
            helper.getActionsWithProject(id)
            .then(actions =>{
                project.actions = actions; 
                res.status (200).json (project);
            })
            
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'error retrieving project' })
        })
})
module.exports = router;