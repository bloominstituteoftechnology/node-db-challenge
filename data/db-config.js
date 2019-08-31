// bring in knex
const knex = require('knex')
// bring in knex configuration
const config = require('../knexfile.js')
// export config
module.exports = knex(config.development)
