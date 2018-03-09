const knex = require('../database/db.js');

const db = {
  getActions: function() {
    return knex('actions');
  },
  getActionById: function(id) {
    return knex('actions')
      .where({id});
  },
  postAction: function(action) {
    return knex
      .insert(action)
      .into('actions');
  },
  putActionById: function(id, action) {
    return knex('actions')
      .where({id})
      .update({
        project_id: action.project_id,
        name: action.name,
        description: action.description,
        notes: action.notes,
        flag: action.flag,
      });
  },
  deleteActionById: function(id) {
    return knex('actions')
      .where({id})
      .del();
  },
};

module.exports = db;