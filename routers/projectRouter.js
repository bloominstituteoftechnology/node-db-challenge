const express = require('express');
const router = express.Router();
const projectDb = require('../data/helpers/projectModel');

router.get('/', (req, res) => {
    projectDb.get()
        .then((projects) => {
            res.json(projects);
        })
        .catch((err) => {
            res.status(500).json({error: "Projects could not be retrieved."});
        });
});

router.get('/:id', (req, res) => {
    projectDb.get(req.params.id)
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({error: "Project could not be retrieved."});
        });
});

router.post('/', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        projectDb.insert(project)
            .then((project) => {
                res.status(201).json(project);
            })
            .catch((err) => {
                res.status(500).json({error: "Unable to create post."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'name' and 'description' for the project."});
    }
});

router.delete('/:id', (req, res) => {
    projectDb.remove(req.params.id)
    .then(count => {
        if (count) {
            res.json({message: "Successfully deleted the project."})
        } else {
            res.status(404).json({message: "The project does not exist."})
        }
    })
    .catch(err => {
        res.status(500).json({error: "The project could not be deleted."});
    })
});

router.put('/:id', (req, res) => {
    const project = req.body;
    if (project.name && project.description) {
        projectDb.update(req.params.id, project)
            .then(project => {
                if (project) {
                    res.json(project);
                } else {
                    res.status(404).json({message: "The project does not exist."});
                }
            })
            .catch(err => {
                res.status(500).json({error: "The project could not be modified."});
            });
    } else {
        res.status(400).json({errorMessage: "Please provide 'name' and 'description' for the project."});
    }
});

router.get('/:id/actions', (req, res) => {
    projectDb.get(req.params.id)
        .then((project) => {
            res.json(project);
        })
        .catch((err) => {
            res.status(500).json({error: "Project actions could not be retrieved."});
        });
});

module.exports = router;