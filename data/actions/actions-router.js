const db = require("../dbConfig.js");

module.exports = {
  find,
  getById,
  insert
};

function find() {
  return db("actions");
}

function getById(id) {
  return db("actions")
    .where({ id })
    .first();
}

function insert(project) {
  return db("actions")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}
