const express = require('express');
const router = express.Router();
const projectsModel = require('../Projects/projectsModel.js');

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
            
            res.status(200).json(`Updated project name to: ${data[id-1].name}`);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({message: `Unable to updated project ID:${id}`});
            
        });
});

module.exports = router;