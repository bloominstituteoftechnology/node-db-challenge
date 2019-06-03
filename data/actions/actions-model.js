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

function insert(action) {
  return db("actions")
    .insert(action)
    .then(ids => {
      return getById(ids[0]);
    });
}
