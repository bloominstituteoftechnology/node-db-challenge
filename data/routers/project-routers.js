const express = require('express');
const router = express.Router();

const projectDB = require('../helpers/projectModel.js')

//Add Project
router.post('/', async (req, res) =>{
    try{
        const project = await projectDB.insert(req.body);
        res.status(201).json(project);
    }catch(error){
        res.status(500).json({
            message: "Error adding project",
        })
    }
})

//Get project by ID
router.get('/:id', async (req, res) =>{
    try{
        const project = await projectDB.get(req.params.id);
        if(project){
            res.status(200).json(project);
        }else{
            res.status(404).json({message: 'Project not found'});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            message: 'Error retrieving project',
        });
    }
});

module.exports = router;