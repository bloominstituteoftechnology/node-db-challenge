const express = require('express');
const router = express.Router();
const actionsModel = require('../Actions/actionsModel.js');

router.get('/', (req, res) => {
    actionsModel.get()
        .then(data => {
            res.status(200).json({ data });
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: `Unable to grab projects.` })
        });
});


router.get('/:id', (req, res) => {
    actionsModel.get(req.params.id)
        .then(data => {
            res.status(200).json({ data });
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: `Unable to grab projects.` })
        });
});

router.post('/', (req, res) => {
    let action = req.body.action, 
        project_id = req.body.project_id;
        console.log('action', action);
        
    if (req.body.action != null) {
        actionsModel.insert(req.body)
            .then(data => {
                res.status(201).json(data);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
                res.status(500).json({ message: `Unable to create new project` })
            });
    }
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let changes = req.body;
    actionsModel.update(id, changes)
        .then(data => {
            console.log(data[id - 1]);

            res.status(200).json({ message: `Updated project name to: ${data[id - 1].name}` });
        })
        .catch(err => {
            console.log(`Error: ${err}`);
            res.status(500).json({ message: `Unable to updated project ID:${id}` });

        });
});

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    actionsModel.delete(id)
        .then(data => {
            res.status(204).json({ message: `Project ${id} removed.` })
        })
        .catch(err => {
            console.log(`Delete error: ${err}`);
            res.status(504).json({ message: `Unable to delete this project.` })
        })
});
module.exports = router;