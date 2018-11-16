const knex = require("knex");

const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

module.exports = {
  getActions,
  getAction,
  addAction
};

function getActions() {
  return db("actions");
}

function getAction(id) {
  return db("actions")
    .select("actions.description", "actions.notes", "actions.project_id")
    .where({ "actions.id": id });
}

function addAction(action) {
  return db("actions")
    .insert(action)
    .into("actions");
}
