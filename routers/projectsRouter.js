const actionsDB = require('../data/helpers/actionDB');
const projectsDB = require('../data/helpers/projectDB');

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const project = req.body;
    projectsDB.insert(project).then(projectId => {
        projectsDB.get(projectId.id)
            .then(project => {
                res.status(201).json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to insert project.  Please make sure there is a project_name a project_description and a project_completed' });
        });
    });
});

router.get('/', (req, res) => {
    projectsDB.get()
        .then(projects => {
            res.status(200).json(projects);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to find projects' });
        });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    projectsDB.get(id)
        .then(project => {
            res.status(200).json(project);
        })
        .catch(err => {
            res.status(500)
                .json({ error: "Project information could not be retrieved." });
        })
})

router.get('/actions/:projectId', (req, res) => {
    const { projectId } = req.params;
    projectsDB.getProjectActions(projectId)
        .then((projectActions) => {
            if (projectActions) {
                res.json(projectActions);
            }
            else {
                res.status(404)
                    .json({ message: "The project with this id does not exist." });
            }
        })

        .catch(err => {
            res.status(500)
                .json({ error: "Project information could not be retrieved" })
        })
})


router.put('/:id', (req, res) => {
    const { id } = req.params;
    const project = req.body;
    projectsDB.update(id, project)
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to update Project.' });
        });
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    projectsDB.remove(id)
        .then(project => {
            res.json(project);
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'Failed to delete project.' });
        });
});

module.exports = router;