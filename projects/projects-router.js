const router = require('express').Router();
const Projects = require('./projects-model.js');

//GET /api/projects/
router.get('/', (req,res) => {
    Projects.get()
        .then(projects => {
            // res.status(200).json(projects);
            const newProjects = []
            projects.forEach((project) => {
                if(project.completed == 0){   
                project = {...project, completed: false}
                 newProjects.push(project)                   
                }
                else if(project.completed == 1){
                    project = {...project, completed: true}
                    newProjects.push(project)
                }        
            })
            res.status(200).json(newProjects)
        })
        .catch(error => {      
            res.status(500).json({error: `error getting projects! `})
        })
})

//GET /api/projects/:id
router.get('/:id', (req,res) => {
    const {id} = req.params
    Projects.getById(id)
        .then(project => {
            if(project){
                // res.status(200).json(project);
                if(project.completed == 0){
                    res.status(200).json({...project, completed: false})
                }
                else{
                    res.status(200).json({...project, completed: true})
                }
            }
            else{
                res.status(404).json({message: `error retrieving the project.`})
            }
        })
})

//POST /api/projects/
router.post('/', (req,res) => {
    const { name, description } = req.body
    Projects.insert({ name, description })
        .then(project => {
            console.log(project);
            // res.status(200).json(project);
            if(project.completed == 0){
                res.status(200).json({...project, completed: false})
            }
            else{
                res.status(200).json({...project, completed: true})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({error: `error posting a new project! `})
        });
})

module.exports = router;
