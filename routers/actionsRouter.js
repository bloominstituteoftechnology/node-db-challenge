const express = require('express');

const router = express.Router();

const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');

//---------Create------------------

router.post('/', (req, res) => {
    const action = req.body;
    projects.get(action.proj_ID)
        .then(proj => {            
            if(action.action_description.length < 129) {
                if(action.action_description && action.notes){
                    actions.insert(action)
                        .then(newAction => {
                            res.json({message: "Action was successfully added!"})
                        })
                        .catch(err => {
                            res.json({message: "Could not add the action."})
                        })
                } else {
                    res.json({message: "Please make sure your action has an appropriate description or notes"})
                } 
            } else {
                res.json({message: "Please make sure your action description is less than 128 characters."})
            }     
        })
        .catch(err => {
            res.json({message: "The project you're trying to add actions to does not exist."})
        })
})

//---------Read------------------

router.get('/', (req, res) => {
    actions.get()
        .then(actions => {
            res.json(actions)
        })
        .catch(err => {
            res.status(500)
                .json({message: "Actions could not be retrieved."})
        })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    actions.get(id)
        .then(action => {
            res.json(action)
        })
        .catch(err => {
            res.status(500)
                .json({message: "The action associated with the requested ID couldn't be retrieved"})
        })
})

//---------Update------------------

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const action = req.body;
    if(action.action_description && action.notes){
        if(action.action_description.length < 129) {
            actions.update(id, action)
                .then(upAct => {
                    res.json({message: "Action successfully updated!"})
                })
                .catch(err => {
                    res.status(404)
                        .json({message: "The action with the specified ID does not exist"})
                })
        } else {
            res.json({message: "Description length must be less than 128 characters."})
        }
    } else {
        res.json({message: "Please enter an accurate description and notes to update the action"})
    }
})

//---------Destroy------------------

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    actions.remove(id)
        .then(action => {
            if(action) {
                res.json({message: "Action successfully deleted"})
            } else {
                res.json({message: "The action with the specified id does not exist"})
            } 
        })
        .catch( err => {
            res.status(500)
                .json({message: "The action could not be removed."})
        })
})

module.exports = router;