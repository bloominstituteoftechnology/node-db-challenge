const config = require('../knexfile.js');
const environment = config.development;
const knex = require('knex')(environment);

module.exports = {
    knex,
    environment,
};