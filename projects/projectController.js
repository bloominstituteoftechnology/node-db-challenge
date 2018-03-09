const knex = require('../database/db.js');

const db = {
  getProjects: function() {
    return knex('projects');
  },
  getProjectById: function(id) {
    return knex('projects')
      .where({id});
  },
  postProject: function(project) {
    return knex
      .insert(project)
      .into('projects');
  },
  putProjectById: function(id, project) {
    return knex('projects')
      .where({id})
      .update({
        name: project.name,
        description: project.description,
        flag: project.flag,
      });
  },
  deleteProjectById: function(id) {
    return knex('projects')
      .where({id})
      .del();
  },
};

module.exports = db;