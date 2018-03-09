const knex = require('../database/dbConfig');

const contexts_db = {
  addContext: function(context) {
    return knex.insert(context).into('Contexts');
  },
  allContexts: function() {
    return knex('Contexts');
  },
  getID: function(id) {
    return knex('Contexts').where({ id });
  },
  updateContext: function(id, context) {
    return knex('Contexts').where({ id }).update(context);
  },
  deleteContext: function(id) {
    return knex('Contexts').where({ id }).del();
  }

}

module.exports = contexts_db;