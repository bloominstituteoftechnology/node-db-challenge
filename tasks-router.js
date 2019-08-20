const express = require("express");

const Tasks = require("./data/tasksModel.js");

const router = express.Router();

module.exports = router;

router.post("/", async (req, res) => {
    const newTask = req.body;

    if (newTask.description) {
        try {
            const task = await Tasks.insert(req.body);
            res.status(201).json(task);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message:
                    "There was an error while saving the task to the database"
            });
        }
    } else {
        res.status(400).json({
            err: "Please provide description for the resources."
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const tasks = await Tasks.get(req.query);
        res.status(200).json(tasks);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "The tasks information could not be retrieved."
        });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const tasks = await Tasks.getById(req.params.id);

        if (post) {
            res.status(200).json(task);
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
