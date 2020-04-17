const db = require("../db-config");

module.exports = {
  find,
  findById,
  add,
};

function find() {
  return db("resource");
}
function findById(id) {
  return db("resource").where({ id }).first();
}
function add(resourceData) {
  return db("resource")
    .insert(resourceData)
    .then(([id]) => db("resource").where({ id }));
}
