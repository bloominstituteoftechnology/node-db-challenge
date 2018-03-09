const knex = require('../database/db');

const db = {
  getAll() {
    return knex('actions');
  },

  getById(id) {
    return knex('actions').where('action_id', id);
  },

  createAction(newAction) {
    return knex('actions').insert(newAction);
  },

  updateAction(id, updatedAction) {
    return knex('actions').where('action_id', id).update(updatedAction);
  },

  deleteAction(id) {
    return knex('actions').where('action_id', id).del();
  },
}

module.exports = db;