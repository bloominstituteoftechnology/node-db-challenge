const express = require('express');
const knex = require('knex');
const router = express.Router();

//Knex
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);

//Get and post projects
router.get('/api/projects', (req,res) => {
     res.json({Message:'Server is up and running now'});
})





module.exports = router;