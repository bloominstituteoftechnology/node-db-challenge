
const router = require('express').Router();
const Tasks = require('./tasks-model.js')

//GET /api/tasks/
router.get('/', (req,res) => {
    Tasks.get()
        .then(tasks => {
            const newTasks = []
            tasks.forEach((task) => {
                if(task.completed == 0){        
                 task = {...task, completed: false}
                 newTasks.push(task)                           
                }
                else{
                    task = {...task, completed: true}
                    newTasks.push(task)
                }        
            })
            res.status(200).json(newTasks)
        })
        .catch(error => {  
            res.status(500).json({error: `error getting tasks! `})
        })
})

//GET /api/tasks/:id/
router.get('/:id', (req,res) => {
    const {id} = req.params
    Tasks.getById(id)
        .then(task => {
            if(task){
                if(task.completed == 0){
                    res.status(200).json({...task, completed: false})
                }
                else{
                    res.status(200).json({...task, completed: true})
                }
            }
            else{
                res.status(404).json({message: `error retrieving the project.`})
            }
        })
})

//POST /api/tasks/
router.post('/', (req,res) => {
    const { description, notes, project_id } = req.body
    Tasks.insert({ description, notes, project_id })
        .then(task => {
            if(task.completed == 0){
                res.status(200).json({...task, completed: false})
            }
            else{
                res.status(200).json({...task, completed: true})
            }
        })
        .catch(error => {
            res.status(500).json({error: `error posting a new resource! `})
        });
})


module.exports = router;