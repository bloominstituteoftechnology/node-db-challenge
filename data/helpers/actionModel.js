const knex = require('knex')
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  insert,
}

function find() {
  return db('Actions')
}

function findById() {
  return db('Actions')
}

function insert() {
  return db('Actions')
}
