const express = require('express');
const knex = require('knex')
const knexConfig = require ('../knexfile.js');
const router = express.Router();
const helper = require ('./helper/helpers');

router.post('/', (req, res) => {
    const body = req.body
    helper.createAction(body)
        .then(action => {
            res.status(201).json(action)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'error making the actions' })
        })
})

router.get('/', (req, res) => {
    helper.getActions()
        .then(actions => {
            res.status(200).json(actions)
        })
        .catch(err => {
            res.status(500).json({ errorMessage: 'error retrieving actions' })
        })
})

module.exports = router;
