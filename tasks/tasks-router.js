const router = require('express').Router();
const Tasks = require('./tasks-model.js')

router.get('/', (req,res) => {
    Tasks.get()
        .then(tasks => {
            res.status(200).json(tasks);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({error: `error getting tasks! `})
        })
})

router.get('/:id', (req,res) => {
    const {id} = req.params
    Tasks.getById(id)
        .then(task => {
            if(task){
                if(task.completed == 1){
                    
                }
                // res.status(200).json(task);
            }
            else{
                res.status(404).json({message: `error retrieving the project.`})
            }
        })
})

router.post('/', (req,res) => {
    const { description, notes, project_id } = req.body
    Tasks.insert({ description, notes, project_id })
        .then(task => {
            console.log(task);
            res.status(200).json(task);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new resource! `})
        });
})

module.exports = router;