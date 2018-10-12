const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

function addAction(action) {
  return db.insert(action).into('actions');
}

function getActions() {
 return db
   .select('*')
   .from('actions');
}

module.exports = {
  addAction,
  getActions
};
