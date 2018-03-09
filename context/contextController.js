const knex = require('../database/db.js');

const db = {
  getContexts: function() {
    return knex('contexts');
  },
  getContextById: function(id) {
    return knex('contexts')
    .where({id});
  },
  postContext: function(context) {
    return knex
      .insert(context)
      .into('contexts');
  },
  putContextById: function(id, knew) {
    return knex('contexts')
      .where({id})
      .update({
        knew
      });
  },
  deleteContextById: function(id) {
    return knex('contexts')
    .where({id})
    .del();
  },
};

module.exports = db;
