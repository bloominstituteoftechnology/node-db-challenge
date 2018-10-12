const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

function addProject(project) {
  return db.insert(project)
    .into('projects')
}

function addAction(action) {
  return db.insert(action)
    .into('actions')
}

module.exports = {
  addProject,
  addAction,
}
