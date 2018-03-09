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
    return knex('actions').where({projectId: id})
    .join('projects', 'projects.id', 'actions.projectId')
    .join('gtd', 'actions.id', 'gtd.actionsId' )
    .join('contexts', 'contexts.id', 'gtd.contextsId')
  }
}

module.exports = db;