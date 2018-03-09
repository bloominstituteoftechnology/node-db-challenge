const knex = require('../database/db.js');

const db = {
  getPActions: function() {
    return knex('projectActions');
  },
  getPActionById: function(id) {
    return knex('projectActions')
      .where({id});
  },
  postPAction: function(pAction) {
    return knex
      .insert(pAction)
      .into('projectActions');
  },
  // putProjectById: function(id, project) {
  //   return knex('projects')
  //     .where({id})
  //     .update({
  //       name: project.name,
  //       description: project.description,
  //       flag: project.flag,
  //     });
  // },
  // deleteProjectById: function(id) {
  //   return knex('projects')
  //     .where({id})
  //     .del();
  // },
};

module.exports = db;