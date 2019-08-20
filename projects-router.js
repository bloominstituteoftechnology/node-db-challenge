const express = require("express");

const Projects = require("./data/projectsModel.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newProject = req.body;

    if (newProject.name) {
        try {
            const project = await Projects.insert(req.body);
            res.status(201).json(project);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the project to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide name  for the project."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.get(req.query);
        res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The projects information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const project = await Projects.getById(req.params.id);

        if (project) {
            res.status(200).json(project);
        } else {
            res.status(404).json({
                message: "The project with the specified ID does not exist"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The project information could not be retrieved"
        });
    }
});
