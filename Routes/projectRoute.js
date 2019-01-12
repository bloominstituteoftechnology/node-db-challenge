const express = require('express');
const router = express.Router();
const knex = require('knex');
const dbconfig = require('../knexfile');
const db = knex(dbconfig.development);


router.post('/', (req, res) => {
    const project = req.body;
    if (!project) {
        res.status(404)
            .json({ error: "Please provide project info." })
        return
    }
    db('projects').insert(project)
        .then(id => {
            res
                .status(201)
                .json(id)
        }).catch(err => {
            console.log(err)
            res
                .status(500)
                .json({ error: "Error adding project to database", err })
        })
})
router.get('/:id/actions', (req, res) => {
    const { id } = req.params;
    db('projects').where('id', id)
        .then(project => {
            if (project) {
                db('actions').where('project_id', id).select('id', 'description', 'notes', 'completed')
                    .then(action => {
                        let newObj = {
                            id: project[0].id,
                            project_name: project[0].project_name,
                            description: project[0].description,
                            completed: project[0].completed,
                            actions:action,
                        }
                        res
                            .status(200)
                            .json(newObj);
                    })
                    ;
            } else {
                res
                    .status(404)
                    .json({
                        error: "The project with the specified ID does not exist."
                    })
            }
        })
        .catch(err => {
            res
                .status(500)
                .json({
                    error: err
                })
        })
})
// router.get('/:id', (req, res) => {
//     const { id } = req.params;
//     db('projects').where('id', id)
//         .then(project => {
//             if (project) {
//                 res
//                     .status(200)
//                     .json(project);
//             } else {
//                 res
//                     .status(404)
//                     .json({
//                         error: "The project with the specified ID does not exist."
//                     })
//             }
//         })
//         .catch(err => {
//             res
//                 .status(500)
//                 .json({
//                     error: err
//                 })
//         })
// })

module.exports = router;