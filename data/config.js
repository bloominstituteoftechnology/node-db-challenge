const knex = require("knex");

const configs = require("../knexfile");

module.exports = knex(configs.development);
