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
  }

}

module.exports = db;