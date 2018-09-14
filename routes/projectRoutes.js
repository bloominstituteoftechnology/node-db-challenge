const express = require('express');

const db = require('../knexfile/db.sqlite3');

const router = express.Router();

//userRoutes
router.get('/', (req, res) => {
    db.find()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            console.error('error', err);

            res.status(500).json({ error: "The project information could not be retrieved." })
        });
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.find(id)
        .then(count => {
            if(count) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: "The project with the specified ID does not exist." });
            }
        })
        .catch(err => res.status(500).json({ error: "The project information could not be retrieved." }));
});

router.post('/', async (req, res) => {
    const project = req.body;
    if(project.description && project.name) {
        try {
            const response = await db.insert(project);
            res.status(201).json(project);
        } catch(err) {
            res.status(500).json({ error: "There was an error while saving the project to the database" });
        }
    } else {
        res.status(400).json({ errorMessage: "Please provide description and name for the project." });
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.remove(id)
        .then(count => {
            if(count) {
                res.status(200).json(project);
            } else {
                res.status(404).json({ message: "The project with the specified ID does not exist." });
            }
        })
        .catch(err => res.status(500).json({ error: "The project could not be removed" }));
});

router.put('/:id', (req, res) => {
    db.update(req.params.id, req.body)
        .then(projects => {
            res.status(200).json(project);
            if(!project.description || !project.name) {
                res.status(400).json({ errorMessage: "Please provide description and notes for the project." });
            }
            if(!count) {
                res.status(404).json({ message: "The project with the specified ID does not exist." });
            }
        })
        .catch(err => res.status(500).json({ error: "The project information could not be modified." }))
})

router.get('/:actions', (req, res) => {
    const { actions } = req.params;
    db.find(actions)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            console.error('error', err);

            res.status(500).json({ error: "The project actions could not be retrieved." })
        });   
})

module.exports = router;