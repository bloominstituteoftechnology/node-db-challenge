const db = require("../db-config");

module.exports = {
  getResources,
  insert
};

function getResources(id) {
  let query = db("resources");
  if (id) {
    return query.where("resources.id", id)
  } else {
    return query;
  }
}
function insert(resource) {
  return db("resources")
  .insert(resource, "id" )
  .then(([id]) => this.getResources(id))
}