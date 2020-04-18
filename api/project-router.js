const express= require("express");
const Projects = require('./projects-model');
const router= express.Router()

router.get("/", (req, res)=>{
    Projects.get()
    .then(projects =>{
        res.status(200).json(projects);
    })
    .catch(err =>{
        res.status(500).json(err);
    })
})
router.get("/:id", (req, res)=>{
    const {id}= req.params;
    Projects.getById(id)
    .then(project =>{
        res.status(200).json(project)
    })
    .catch(err =>{
        res.status(500).json(err);
    })
})
router.post('/', (req, res) => {
    const projectData = req.body;
    Projects.add(projectData)
        .then(project => {
            res.status(201).json(project)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({message: 'failed to add the project to the db'})
        })

})
router.post('/:id/tasks', (req,res)=> {
    const id = req.params.id
    const taskData = req.body;
    Projects.addTask(taskData, id)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(err => {
        console.log(err.message)
        res.status(500).json({message: 'failed to add task'})
    })
})