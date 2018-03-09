const knex = require('../database/db.js');

const db = {
  getActions: function() {
    return knex('actions');
  },
  getActionById: function(id) {
    return knex('actions')
    .where({id});
  },
  postAction: function(post) {
    return knex
      .insert(action)
      .into('actions');
  },
  putActionById: function(id, text) {
    return knex('actions')
      .where({id})
      .update({
        text
      });
  },
  deleteActionById: function(id) {
    return knex('actions')
    .where({id})
    .del();
  },
};

module.exports = db;
