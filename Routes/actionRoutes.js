const express = require('express');

const actions = require('./aModels.js');

const router = express.Router();


//create new action
router.post('/', (req, res) => {
    const newAction = {
        "name": req.body.name,
        "description": req.body.description,
        "notes": req.body.notes,
        "project_id": req.body.project_id,
       
    }

    if (!newAction.name ||!newAction.description || !newAction.notes || !newAction.project_id) {
        return res.status(400).json({msg: 'please provide all required fields'});
    }
    actions
        .add(newAction)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(err => {
            res.status(500).json({message: 'Not able to create new action at this time'});
        });
});

//get all actions
router.get('/', (req, res) => {
    actions
        .find()
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(err => {
            res.status(500).json({message: 'No Actions Found'});
        });
});



// //get actions by id
// router.get('/api/actions/:id', (req, res) => {
//     const id = req.params.id;
//     actions
//         .get(id)
//         .then(action => {
//             if(!action) {
//                 res.status(404).json({message: 'No Action with this ID exists'})
//             } else {
//                 res.status(200).send(action);
//             }
//         })
//         .catch(err => {
//             res.status(500).json({error: 'action can not be populated at this time'});
//         });
// });

// //get actions by project id
// router.get('/api/projects/:id/actions/', (req, res) => {
//     const id = req.params.id;
//     projects
//     .getProjectActions(id)
//     .then(actions => {
//         if(!actions) {
//             res.status(404).json({message:'no actions found for this project'});
//         } else {
//             res.status(200).send(actions);
//         }
//     })
//     .catch(err => {
//         res.status(500).json({message:'actions cannot be populated at this time.'});
//     });
// });


// //update action by id *** come back to check error handling
// router.put('/api/actions/:id', (req, res) => {
//     const id = req.params.id;
//     const update = req.body;
//     actions
//         .update(id, update)
//         .then(action => {
//                 res.status(200).json(action)
//         })
//         .catch(err => {
//             res.status(500).json({message: 'Server cannot update project at this time.'});
//         });
// })


// //delete action
// router.delete('/api/actions/:id', (req, res) => {
//     const id = req.params.id;

//     actions
//         .get(id)
//         .then(action => {
//             actions
//             .remove(id)
//             .then(action => {
//                 res.status(200).json({message: 'action has been deleted'})
//             })
//             .catch(err => {
//                 res.status(500).json(err)
//             });
//         })
//         .catch(err => {
//             res.status(404).json({message: 'action not found'});
//         });
// });


module.exports = router;