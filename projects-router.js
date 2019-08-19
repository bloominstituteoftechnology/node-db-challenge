const express = require("express");

const Projects = require("./data/dbConfig.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newProject = req.body;

    if (newProject.name && newProject.desciption) {
        try {
            const project = await Projects.insert(req.body);
            res.status(201).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the project to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide name and description for the project."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const projects = await Projects.find(req.query);
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The projects information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);

        if (post) {
            res.status(200).json(post);
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
