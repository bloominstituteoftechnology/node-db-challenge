const config = require("../knexfile.js")
const knex = require("knex")

const db = knex(config.development)

module.exports = db