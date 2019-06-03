const db = require("../dbConfig.js");

module.exports = {
  find,
  getById,
  insert
};

function find() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}
