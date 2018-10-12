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

function findById(id) {
  return db('Projects')
    // .where({ Projects.id: Number(id) })
    .join('Actions', 'Projects.id', 'Actions.project_id')
    .groupBy('Actions.id')
}

function insert(project) {
  return db('Projects')
    .insert(project)
}
