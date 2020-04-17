const db = require("../db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("project");
}

function findById(id) {
  return db("project").where({ id }).first();
}

function add(projectData) {
  return db("project")
    .insert(projectData)
    .then(([id]) => db("project").where({ id }).first());
}
