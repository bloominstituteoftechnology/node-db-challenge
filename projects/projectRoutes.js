const express = require('express');
const db = require('./projectModels');
const router = express.Router();


//ADD NEW PROJECT
router.post('/', (req, res) => {
    let newProject = req.body
    
    db
    .addProject(newProject)
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err.message);
    });
});

//ADD ACTION
router.post('/actions', (req, res)=>{
    let newAction = req.body

    db
    .addAction(newAction)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET ALL PROJECTS
router.get('/', (req, res)=> {
    db
    .getProjects()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET ALL ACTIONS
router.get('/actions', (req, res)=> {
    db
    .getActions()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET PROJECT BY ID
router.get('/:id', (req, res) => {
    let {id} = req.params;

    db
    .get(id)
    .then(response=> {
        if(response) {
            res.status(200).json(response)
            } else {
                res.status(404).send('There is no project at that id')
            }
        })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//GET ACTION BY ID
router.get('/actions/:id', (req, res) => {
    let {id} = req.params;

    db
    .getActionById(id)
    .then(response=> {
        if(response.length >= 1) {
        res.status(200).json(response)
        } else {
            res.status(404).send('There is no action at that id')
        }
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
})

//MODIFY PROJECT
router.put('/:id', (req, res) => {
    let {id}=req.params;
    let project = req.body;

    db
    .modifyProject(id, project)
    .then(response => {res.status(200).json(response)})
    .catch(err => res.status(500).json(err))
})

//MODIFY ACTION
router.put('/actions/:id', (req, res) => {
    let {id}=req.params;
    let action = req.body

    db
    .modifyAction(id, action)
    .then(response => {res.status(200).json(response)})
    .catch(err => res.status(500).json(err.message))
})

//DELETE PROJECT
router.delete('/:id', (req,res) => {
    let {id} = req.params;

    db
    .deleteProject(id)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => res.status(500).json(err.message))
})

//DELETE ACTION
router.delete('/actions/:id', (req,res) => {
    let {id} = req.params;

    db
    .deleteAction(id)
    .then(response => {
        res.status(201).json(response)
    })
    .catch(err => res.status(500).json(err.message))
})



module.exports = router;