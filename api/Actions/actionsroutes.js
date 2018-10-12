const express = require('express');
const actionsTable = require('../../data/helpers/actionsmodel');
const errorHandler = require('../ErrorHandler/errorhandler');
const router = express.Router();

// Routes
// // ~~~ GET ~~~ //


// ~~~ POST ~~~ //
// add(newAction)
router.post('/', (req, res, next) => {
    const { description, notes, project_id } = req.body;
    if(description && notes && project_id) {
        actionsTable.add({ description, notes, project_id })
            .then((postId) => {
                res.status(201).json({"actionId": postId[0]});
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
