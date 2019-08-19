const express = require("express");

const Tasks = require("./data/dbConfig.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newTask = req.body;

    if (newTask.description && newTask.notes) {
        try {
            const tasks = await Tasks.insert(req.body);
            res.status(201).json(post);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the task to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide description and notes for the resources."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Tasks.find(req.query);
        res.status(200).json(posts);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The tasks information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tasks = await Tasks.findById(req.params.id);

        if (post) {
            res.status(200).json(post);
        } else {
            res.status(404).json({
                message: "The task with the specified ID does not exist"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "The task information could not be retrieved"
        });
    }
});
