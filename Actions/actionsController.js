const knex = require('../database/dbConfig');

const actions_db = {
  addAction: function(action) {
    return knex.insert(action).into('Actions');
  },
  allActions: function() {
    return knex('Actions');
  },
  getID: function(id) {
    return knex('Actions').where({ id });
  },
  updateAction: function(id, action) {
    return knex('Actions').where({ id }).update(action);
  },
  deleteAction: function(id) {
    return knex('Actions').where({ id }).del();
  }

}

module.exports = actions_db;