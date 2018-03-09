const knex = require('../database/db.js');

const db = {
  getProjects: function() {
    return knex('projects');
  },
  getProjectById: function(id) {
    return knex('actions')
    .where({id});
  },
  postProject: function(project) {
    return knex
      .insert(project)
      .into('projects');
  },
  putProjectById: function(id, knew) {
    return knex('projects')
      .where({id})
      .update({
        knew
      });
  },
  deleteProjectById: function(id) {
    return knex('actions')
    .where({id})
    .del();
  },
};

module.exports = db;
