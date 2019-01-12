const express = require('express');
const router = express.Router();

const db = require('../data/projectsModel');

router.get('/', (req, res) => {
    db.get()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: "Could not fetch these projects. They often run wild." })
    })
});

router.get('/:id', (req, res) => {
    const {id} = req.params;
    db.get(id)
        .then(project => {
            if(Object.keys(project).length === 0){
                res.status(404).json({ message: "That's not a valid Project ID. You sure about that one?" })
            } else {
                res.json(project)
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Could not find that project. It's off running rampant...again..." })
        })
});

module.exports = router;