const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

function getActions() {
  return db("actions");
}

function addAction(action) {
  return db.insert(action).into("actions");
}

module.exports = {
  getActions,
  addAction
};
