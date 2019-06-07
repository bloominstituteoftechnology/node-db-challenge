const db = require("./projects-model"); //has all tables

const router = require('express').Router();

//install knex and driver

router.post('/', (req,res) =>{
    db.addProjects(req.body)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

router.post('/actions', (req,res) =>{
    db.addActions(req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

router.post('/bridge', (req,res) =>{
    db.addBridge(req.body)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})


router.get('/:id/actions', (req,res) =>{
    db.putTogether(req.params.id)
    .then(action => {
        res.status(200).json(action)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

module.exports = router;