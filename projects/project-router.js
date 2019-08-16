const express = require('express');

const projectModel = require('./project-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    projectModel
        .find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(error => {
            res.status(500).json({ message: 'failed to get Resources' })
        });
});

router.post('/', (req, res) => {
    const description = req.body
    const notes = req.body
    const project_id = req.body
    res.status(201).json(description, notes, project_id);
})
error => {
    res.status(500).json({ message: 'failed to post projects' })
};



module.exports = router;