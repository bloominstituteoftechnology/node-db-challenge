const knex = require('knex')
const knexConfig = require('../knexfile.js')
const db = knex(knexConfig.development)

function getProjects() {
  return db('projects')
}

function addProject(project) {
  return db.insert(project)
    .into('projects')
}

function getProjectById(id) {
  return db('projects')
    .first()
    .where({ id })
  }

function addActionsToProject(id) {
  return db('actions')
    .select('actions.id', 'actions.description', 'actions.notes', 'actions.completed')
    .where({ 'project_id': id })
}

module.exports = {
  getProjects,
  addProject,
  getProjectById,
  addActionsToProject
}
