const knex = require("knex");

const config = require("../knexfile.js").development;
const db = knex(config);

module.exports = db;
