const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  add
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id });
}

function add(resources) {
  return db("resources").insert(resources);
}
