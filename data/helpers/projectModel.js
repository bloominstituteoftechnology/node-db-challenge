const knex = require('knex')
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  insert,
}


function find() {
  return db('Projects')
}

function findById() {
  return db('Projects')
}

function insert() {
  return db('Projects')
}
