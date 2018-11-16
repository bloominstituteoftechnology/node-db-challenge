const express = require('express')
const route = express.Router();
const actionDb = require('../data/helpers/actionDb.js')



route.get('/', (req, res) => {
    actionDb.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => res.status(500).json(`Something went wrong, please see error: ${err}`))
})

route.post('/', (req, res) => {
    const {description, notes, project_id} = req.body
    actionDb.create({description, notes, project_id})
    .then(action => {
        res.status(200).json({Message: `You successfully created a new action`})
    })
    .catch(err => res.status(500).json(err))
})

module.exports = route;
