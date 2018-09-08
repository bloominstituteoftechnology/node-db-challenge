const express = require('express');
const router = express.Router();
const projectsModel = require('../Projects/projectsModel.js');
const actionsModel = require('../Actions/actionsModel.js');

router.get('/', (req,res)=>{
    projectsModel.get()
        .then(data => {
            res.status(200).json({data});
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({message: `Unable to grab projects.`})
        });
});

router.get('/:id', (req, res) => {
    projectsModel.get(req.params.id)
        .then(project => {
            if(project){
                actionsModel.getByProjectId(req.params.id)
                    .then(actions => {
                        console.log("getting some action", actions);
                        
                        project.actions = actions;
                        res.status(200).json(project);
                    })
                    .catch(err => console.log(err)
                    );
            }
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: `Unable to grab projects.` })
        });
});

router.post('/', (req,res)=>{
    if(req.body.name != null){
        projectsModel.insert(req.body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                res.status(500).json({ message: `Unable to create new project` })
            });
    }
})

router.put('/:id',(req,res)=>{
    let id = req.params.id;
    let changes = req.body;
    projectsModel.update(id, changes)
        .then(data => {
            console.log(data[id-1]);
            
            res.status(200).json({message:`Updated project name to: ${data[id-1].name}`});
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({message: `Unable to updated project ID:${id}`});
            
        });
});

router.delete('/:id', (req,res)=>{
    let id = req.params.id;
    projectsModel.delete(id)
        .then(data=>{
            res.status(204).json({message: `Project ${id} removed.`})
        })
        .catch(err => {
            console.log(`Delete error: ${err}`);
            res.status(504).json({message: `Unable to delete this project.`})
        })
});
module.exports = router;