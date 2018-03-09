const knex = require('../database/db');

const db = {
  getAll() {
    return knex('contexts');
  }
}

module.exports = db;