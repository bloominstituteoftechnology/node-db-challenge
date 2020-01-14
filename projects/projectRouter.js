const express = require('express');

const projects = require('./model_projects');
const router = express.Router();


router.get("/", (req, res) => {
    projects.findProjects()
        .then(project_list => {
            project_list.map(projects => {
                if (projects.completed) {
                    projects.completed = true
                } else {
                    projects.completed = false
                }
            })
            return res.status(200).json(project_list)
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'GET error for projects' })
        })
});


router.post("/", (req, res) => {
    projects.addProjects(req.body)
        .then(newProject => {
            res.status(201).json(newProject);
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: 'Error sending project to database' })
        })
})

module.exports = router;
