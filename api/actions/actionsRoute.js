const express = require('express');
const router = express.Router();
const actions= require('./actionsModel.js');


// endpoints here for the actions

//POST /api/actions
router.post('/', async (req, res) => {
    try {
      const action = req.body;
      if(action.description.length > 0){
        const newAction = await actions.addAction(action);
        res.status(200).json(newAction);
      } else {
        res.status(404).json({message: "Please enter the name of the action"});
      }
    }
    catch (err) {
      console.log(err);
      res.status(500).json({message: "There was an error while trying to save an action to the data base"});
    }
  });


  module.exports = router;