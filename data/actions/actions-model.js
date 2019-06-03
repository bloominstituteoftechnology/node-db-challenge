const db = require("../dbConfig.js");

module.exports = {
  find,
  getById,
  insert,
  getByIdComplete
};

function find() {
  return db("actions");
}

function getById(id) {
  return db("actions")
    .where({ id })
    .first();
}

function getByIdComplete(id) {
  return db("actions as a")
    .join("projects as p", "p.id", "a.projects_id")
    .select("a.id", "a.description", "a.notes", "a.completed")
    .where({ projects_id: id });
}

function insert(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getById(ids[0]);
    });
}
