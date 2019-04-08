const db = require("../config/knexConfiguration.js");

module.exports = {
  getActions,
  getAction,
  getActionsByProject,
  addAction,
  deleteAction,
  updateAction
};

function getActions() {
  return db("actions");
}

function getAction(id) {
  return db("actions")
    .where({ id })
    .first();
}

function getActionsByProject(id) {
  return db("actions").where({ project_id: id });
}

function addAction(action) {
  return db("actions").insert(action);
}

function deleteAction(id) {
  return db("actions")
    .where({ id })
    .del();
}

function updateAction(id, updated) {
  return db("actions")
    .where({ id })
    .update(updated);
}