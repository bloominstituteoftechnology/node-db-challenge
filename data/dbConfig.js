const knex = require('knex');

const configuration = require('../knexfile.js');
const db = knex(configuration.development);

module.exports = db; 