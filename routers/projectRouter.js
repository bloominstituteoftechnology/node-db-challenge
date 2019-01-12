//access helper methods
const projectDb = require('../data/helpers/projectDB');

//create router
const express = require('express');
const router = express.Router();

//*** */route handlers/ endpoints******
//get all projects
router.get('/', (req, res) =>{
    projectDb.getProjects()
    .then(projects =>{
        res.status(200)
        res.json(projects)
    })
    .catch(err =>{
        res.status(500).json({error: "Unable to retrieve projects"})
    })
})

//add a new project
router.post('/', (req,res) =>{
    const newProject = req.body
    projectDb.addProject(newProject)
    .then(id =>{
        console.log('hello from here')
        res.status(201)
        res.json(id)
    })
    .catch(err =>{
        res.status(500).json({error: "Unable to add project"})
    })
})

//export router
module.exports = router;