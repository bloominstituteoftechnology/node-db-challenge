const knex = require('knex');
const knexConfig = require('../knexfile');

module.export = knex(knexConfig.development);