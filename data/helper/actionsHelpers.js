const knex = require("knex");
const knexConfig = require("../../knexfile");
const db = knex(knexConfig.development);

function addAction(action) {
  return db.insert(action).into("actions");
}

function getAction(id) {
  return db
    .select("*")
    .from("actions")
    .where({ id })
    .first();
}

function getActions() {
  return db
    .select('*')
    .from('actions');
}

module.exports = {
  addAction,
  getAction,
  getActions
};
