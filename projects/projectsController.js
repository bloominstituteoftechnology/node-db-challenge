const knex = require('../database/db');

const db = {
  getAll: () => {
    return knex('projects');
  },
  add: (project) => {
    return knex('projects').insert(project);
  },
  remove: (id) => {
    return knex('projects').where({ id }).del()
  },
  update: (id, projectInfo) => {
    return knex('projects').where({ id }).update(projectInfo);
  },
  projectById(id) {
    return knex('projects_contexts').where({projectId: id})
    .join('projects', 'projects.id', 'projects_contexts.projectId')
    .join('contexts', 'contexts.id', 'projects_contexts.contextsId' )
    .join('actions_contexts', 'actions_contexts.contextsId', 'contexts.id')
    .join('actions', 'actions.id', 'actions_contexts.actionsId')
  }
}

module.exports = db;