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
  putContextById: function(id, context) {
    return knex('contexts')
      .where({id})
      .update({context: context.context});
  },
  deleteContextById: function(id) {
    return knex('contexts')
      .where({id})
      .del();
  },
};

module.exports = db;