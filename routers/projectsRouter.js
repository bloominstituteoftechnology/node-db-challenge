const express = require('express');

const router = express.Router();


const projects = require('../data/helpers/projectModel');




//---------Create------------------

router.post('/', (req, res) => {
    const proj = req.body;
    if(proj.project_name && proj.proj_description){
        if(proj.project_name.length < 129) {
            projects.insert(proj)
            .then(projInfo => {
                res.json({projInfo});
            })
            .catch( err => {
                console.log(err);
                res.json({message: "Failed to add project"})
            })
        } else {
            res
                .status(400)
                .json({message: "Project name can be no longer than 128 characters"})
        }
    } else {
        res
            .status(400)
            .json({message: "Please ensure you have a project name and description"})
    }
})

//---------Read------------------

router.get('/', (req, res) => {
    projects.get()
    .then(proj => {
        res.json(proj)
    })
    .catch(err => {
        res.status(500)
            .json({message: "The projects information could not be retrieved."})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    projects.get(id)
        .then(proj => {
            res.json(proj)
        })
        .catch(err => {
            res.status(500)
                .json({message: "The projects information could not be retrieved."})
        })
})


router.get('/:id/actions', (req, res) => {
    const { id } = req.params;
    projects.getProjectActions(id)
        .then(proj => {            
            if(proj){
                res.json(proj);
            } else {
                res.status(404)
                    .json({message: "No actions are associated with this project"})
            }            
        })
        .catch(err => {
            res
                .status(500)
                .json({message: "Actions info could not be retrieved"})
        })
})

//---------Update------------------

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const proj = req.body;
    if(proj.project_name && proj.proj_description){
        if(proj.project_name.length < 129){
            projects.update(id, proj)
            .then(upProj => {
                res.json(upProj);
            })
            .catch(err => {
                res.status(404)
                    .json({message: "The project could not be updated"})
            })
        } else {
            res
                .status(400)
                .json({message: "Project name is too long"})
        }
    } else {
        res
            .status(400)
            .json({message: "Please provide either a new name or description to update the project."})
    }
})

//---------Destroy------------------

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    projects.remove(id)
        .then(count => {
            if(count){
                res.json({message: "Project was successfully deleted"})
            } else {
                res.json({message: "The project with the specified ID does not exist"})
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({message: "The Project could not be removed"})
        })
})


module.exports = router;