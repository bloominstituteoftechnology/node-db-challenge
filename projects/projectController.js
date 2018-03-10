const knex = require('../database/db.js');

const db = {
  getProjects: function() {
    return knex('projects');
  },
  getProjectById: function(id) {
    return knex('projects')
      .where({id});
  },
  getProjectAndActionsById: function(id) {
    const promiseArray = [];
    promiseArray[0] = knex('projects as p')
      .select('p.id', 'p.name', 'p.description', 'p.flag')
      .where({id});

    promiseArray[1] = knex('actions as a')
      .join('projectActions as pa', 'a.id', 'pa.id')
      .select('a.id', 'a.description', 'a.notes', 'a.flag')
      .where('pa.project_id', id);
    
      return Promise.all(promiseArray);
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