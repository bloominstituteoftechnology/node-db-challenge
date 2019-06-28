const knex = require('knex');

const knexConfig = require('../knexfile.js')


const db = Knex(knexConfig.development);



module.exports = db;