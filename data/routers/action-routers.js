const express = require ('express');
const actionDB = require ('../../data/helpers/actionModel.js');
const router = express.Router();


router.post('/', async (req, res) =>{
    
    try{
        const actionHolder = (req.body)
        if(actionHolder.id){
        const action = await actionDB.insert(req.body);
        res.status(201).json(action);
        }else{
            res.status(400).json({message: "Must have an Action ID"})
        }
    }catch(error){
        res.status(500).json({
            message: "Error adding action"
        })
    }
})




module.exports = router;