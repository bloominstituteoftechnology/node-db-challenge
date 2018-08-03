const express = require('express');
const db = require('../data/helpers/projectDb')

const router = express.Router();

// GET Project

router.get('/', async (req, res) => {
    try {
        const response = await db.getProjects();
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

router.get('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        const response = await db.findProjectById(id);
        if (!response) {
            return res.status(400, 'Failed to retrieve project information.')
        } 
        res.status(200).json(response);
    } catch (err) {
        return res.status(500).json(err);
    }
})

//POST Project 

router.post('/', async (req, res) => {
    if (!(req.body.name && req.body.description)) {
        return res.status(400, "Failed to save project to database.")
    }
    try {
        const response = await db.addProject(req.body);
        const newProject = {
            id: response[0],
            ...req.body,
            completed: false
        }
        res.status(200).json(newProject);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// UPDATE Project

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    if ((!req.body.name && !req.body.description)) {
        return res.status(400, "Failed to update project.")
    } 

    try {
        const response = await db.updateProject(id, req.body);
        if (!response){
            return res.status(404, 'Failed to update project.')
        }
        const newProj = {
            id,
            ...req.body
        }
        res.status(200).json(newProj);
    } catch (err) {
        return res.status(500).json(err);
    }
})

// DELETE

router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);

    try {
        const response = await db.deleteProject(id);
        if (response[1] === 0){
            return res.status(404, 'Failed to delete project.')
        }
        const project = response[0][0]
        project.competed = project.completed ? true: false;
        res.status(200).json(project);
    } catch (err) {
        return res.status(500).json(err);
    }
})



module.exports = router;