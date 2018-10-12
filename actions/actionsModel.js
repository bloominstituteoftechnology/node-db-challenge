const knex = require('knex');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  add,
};

function add(action) {
  return db('actions')
    .insert(action)
    .into('actions');
}
