const express = require("express")
const db = require("../data/dbConfig")
const Projects = require("./projects-model")
const router = express.Router()

// `GET request /api/projects/ retrieves all projects
router.get('/', (req,res) => {
    Projects.findAll()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        console.log(err, "Error in getting list of all Projects");
        res.status(500).json({error: "Error cannot get list of Projects."})
    })
})


//Gets api/projects/:id   gets project with specified  id
router.get('/:id', (req, res) => {
    Projects.findById(req.params.id)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(err => {
        console.log(err)
    })
})


//Post request to api/projects adds new project
router.post('/', (req, res) => {
    const newProject = req.body;
 db('projects')
    .insert(newProject)
    .then(projects => {
        res.status(201).json(projects);
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;