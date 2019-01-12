const express = require('express');
const router = express.Router();

//Knex
const dbConfig = require('../knexfile.js');
const db = knex(dbConfig.development);







module.exports = router;