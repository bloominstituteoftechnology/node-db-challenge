const router = require('express').Router()
const db = require('../data/dbConfig')

router.get('/', async (req, res)=> {
    try {
        const actions = await db('action');
        res.status(200).json({actions, message: 'Success'})
    }
    catch(error){
        res.status(500).json({message: 'Error retrieving actions', error})
    }
})

router.post('/', async (req, res)=> {
    try {
        const action = await db('action').insert(req.body);
        res.status(200).json({action, message: "Success"})
    }
    catch(error){
        res.status(500).json({message: 'Error posting action', error})
    }
})

module.exports = router