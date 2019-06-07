const db = require("./projects-model"); 

const router = require('express').Router();


router.get('/', (req, res) => {
    db.getAllProjects('projects')
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  })

router.put('/:id', (req, res) => {
    db.updateProject(req.params.id, req.body)
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(error => {
      res.status(500).json(error)
    })
  })

  router.delete('/:id', (req,res) =>{
    db.deleteProject(req.params.id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(error =>{
        res.status(500).json(error)
    })
})

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