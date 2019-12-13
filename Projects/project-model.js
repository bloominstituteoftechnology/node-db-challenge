const db = require("../data/db-config");

module.exports = {
  getById,
  get,
  add
};

function add(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}
function get() {
  return db("projects");
}
