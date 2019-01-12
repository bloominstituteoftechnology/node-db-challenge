//access helper methods
const actionsDb = require('../data/helpers/projectDB');

//create router
const express = require('express');
const router = express.Router();

//*** */route handlers/ endpoints******
//get all actions
router.get('/', (req,res) =>{
    actionsDb.getActions()
    .then(actions =>{
        res.status(200)
        res.json(actions)
    })
    .catch(err =>{
        res.status(500).json({error: "Unable to retrieve actions"})
    })
})

//add an action
router.post('/', (req,res) =>{
    const newAction = req.body;
    actionsDb.addAction(newAction)
    .then(id =>{
        res.status(201)
        res.json(id)
    })
    .catch(err =>{
        res.status(500).json({error: "Unable to add action"})
    })
})


module.exports = router;