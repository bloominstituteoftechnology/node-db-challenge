const knex = require('../database/db');

const db = {
  getAll: () => {
    return knex('contexts');
  },
  add: (context) => {
    return knex('contexts').insert(context);
  },
  remove: (id) => {
    return knex('contexts').where({ id }).del()
  },
  update: (id, contextInfo) => {
    return knex('contexts').where({ id }).update(contextInfo);
  }

}

module.exports = db;