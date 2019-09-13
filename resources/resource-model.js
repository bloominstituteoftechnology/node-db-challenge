const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  add
};

function get() {
  return db("resources");
}

function getById(id) {
  return db("resources").where({ id });
}

function add(resource) {
  return db("resources").insert(resource);
}