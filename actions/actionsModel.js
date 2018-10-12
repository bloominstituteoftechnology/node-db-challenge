const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  findAction,
  addAction,
  findActionById
};

function findAction() {
  return db("actions");
}
function findActionById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function addAction(action) {
  return db("actions")
    .insert(action)
    .into("actions");
}
