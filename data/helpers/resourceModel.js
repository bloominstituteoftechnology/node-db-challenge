const db = require("../dbConfig.js");
const mappers = require("./mappers");

module.exports = {
  get,
  insert,
  update,
  remove
};

function get(id) {
  let query = db("resources"); 
  if (id) {
    return query
      .where({ id })
      .first()
      .then(resource => mappers.actionToBody(resource));
  }

  return query.then(resources => {
    return resources.map(resource => mappers.actionToBody(resource));
  });
}

function insert(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => this.get(id));
}

function update(id, changes) {
  return db("resources")
    .where({ id })
    .update(changes)
    .then(count => (count > 0 ? this.get(id) : null));
}

function remove(id) {
  return db("resources")
    .where({ id })
    .del();
}