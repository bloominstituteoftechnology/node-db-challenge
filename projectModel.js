const knex = require("knex");

const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(course) {
  return db("projects")
    .insert(course)
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

// repository pattern for data access
