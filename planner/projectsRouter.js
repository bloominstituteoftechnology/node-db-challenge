const express = require("express")
const db = require("../data/dbConfig")
const Projects = require("./projects-model")
const router = express.Router()

// `GET /api/projects/`: all recipes 
//works
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

module.exports = router;