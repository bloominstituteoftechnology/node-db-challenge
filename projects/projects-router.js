const router = require('express').Router();
const Projects = require('./projects-model.js');

router.get('/', (req,res) => {
    Projects.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting projects! `})
        })
})

module.exports = router;