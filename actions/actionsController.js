const knex = require('../database/db');

const db = {
  getAll: () => {
    return knex('actions');
  },
  add: (action) => {
    return knex('actions').insert(action);
  },
  remove: (id) => {
    return knex('actions').where({ id }).del()
  },
  update: (id, actionInfo) => {
    return knex('actions').where({ id }).update(actionInfo);
  }
}

module.exports = db;