const express = require('express');
const projectsTable = require('../../data/helpers/projectsmodel');
const errorHandler = require('../ErrorHandler/errorhandler');
const router = express.Router();

// Routes
// // ~~~ GET ~~~ //
router.get('/:id/withactions', (req, res, next) => {
    projectsTable.findProjectWithActions(req.params.id)
        .then((project) => {
            if(project) {
                let projObj = {
                    "id": project[0].ProjectId,
                    "name": project[0].ProjectName,
                    "description": project[0].ProjectDescription,
                    "completed": project[0].ProjectCompleted === 0 ? false : true,
                    "actions": []
                };
                project.forEach((action) => {
                    projObj.actions.push({
                        "id": action.ActionId,
                        "description": action.ActionDescription,
                        "notes": action.ActionNotes,
                        "completed": action.ActionCompleted === 0 ? false : true
                    });
                });
                res.status(200).json(projObj);
            } else {
                next(["h404", "Project not found!"]);
            }
        })
        .catch((err) => {
            next(["h500", err]);
        });
});

// nested query test
router.get('/:id/nestedactions', (req, res, next) => {
    projectsTable.findProjectNestedActions(req.params.id)
        .then((project) => {
            if(project) {
                res.status(200).json(project);
            } else {
                next(["h404", "Project not found via route!"]);
            }
        })
        .catch((err) => {
            next(["h500", err]);
        });
});

// ~~~ POST ~~~ //
// add(newProject)
router.post('/', (req, res, next) => {
    const { name, description } = req.body;
    if(name) {
        projectsTable.add({ name, description })
            .then((postId) => {
                res.status(201).json({"projectId": postId[0]});
            })
            .catch((err) => {
                next(["h500", err]);
            });
    } else {
        next(["h400", "Missing object property!"])
    }
});

// // ~~~ PUT ~~~ //


// // ~~~ DELETE ~~~ //


router.use(errorHandler);

module.exports = router;
