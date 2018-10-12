const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
  findActionByProject
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(project) {
  return db("projects")
    .insert(project)
    .into("projects");
}

function update(id, changes) {
  return db("projects")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("projects")
    .where({ id })
    .del();
}

function findActionByProject(project_id) {
  return db("actions").where({ project_id });
}
