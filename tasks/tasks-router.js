const router = require('express').Router();
const Tasks = require('./tasks-model.js')

router.get('/', (req,res) => {
    Tasks.get()
        .then(tasks => {
            const newTasks = []
            console.log("TASKS", tasks)
            tasks.forEach((task) => {
                // const c = tasks[0]
                console.log("still tasks", task)
                if(task.completed == 0){
                console.log("in FOREACH", task.completed)
                 task = {...task, completed: false}
                 newTasks.push(task)
                 console.log("task!!!!", task)
                // res.status(200).json({...c, completed: false })
                }
                else{
                    task = {...task, completed: true}
                    newTasks.push(task)
                }
                // res.status(200).json(tasks)
            })
            res.status(200).json(newTasks)

            

           

            // res.status(200).json({...c, completed: false })
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

router.post('/', (req,res) => {
    const { description, notes, project_id } = req.body
    Tasks.insert({ description, notes, project_id })
        .then(task => {
            console.log(task);
            if(task.completed == 0){
                res.status(200).json({...task, completed: false})
            }
            else{
                res.status(200).json({...task, completed: true})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new resource! `})
        });
})


module.exports = router;