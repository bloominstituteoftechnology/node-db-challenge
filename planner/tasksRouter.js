const express = require("express")
const db = require("../data/dbConfig")
const Tasks = require("./resources-model")
const router = express.Router()

// `GET request /api/tasks/ retrieves all tasks
router.get('/', (req,res) => {
    Tasks.findAll()
    .then(tasks => {
        res.json(tasks)
    })
    .catch(err => {
        console.log(err, "Error in getting list of all tasks");
        res.status(500).json({error: "Error cannot get list of tasks."})
    })
})


//Post request to api/tasks adds new task
router.post('/', (req, res) => {
    const newTask = req.body;
 db('tasks')
    .insert(newTask)
    .then(tasks => {
        res.status(201).json(tasks);
    })
    .catch(err => {
        console.log(err)
    })
})

module.exports = router;