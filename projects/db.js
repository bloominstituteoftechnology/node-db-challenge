
const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  // getProject,
  addProject,
  addActions
}

// function getProject(id) {
//   return db('projects')
//     .where({ id })
//     .first()
//     .insert('actions')
//     .join('actions', 'projects.id', 'actions.projects_id')
//     .select('actions.notes')
    
// }

function addProject(project) {
  return db('projects')
    .insert(project)
    .into('projects')
}

function addActions(action) {
  return db('actions')
    .insert(action)
    .into('actions')
}