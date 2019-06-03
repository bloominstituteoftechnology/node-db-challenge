const db = require("../dbConfig.js");

module.exports = {
  find,
  getById,
  insert,
  getByIdComplete
};

function find() {
  return db("projects");
}

function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getByIdComplete(id) {
  return (
    db("actions as a")
      // .join("projects as p", "p.id", "a.projects_id")
      .select("p.*", "a.*")
      .where({ projects_id: id })
  );
}

function insert(project) {
  return db("projects")
    .insert(project)
    .then(ids => {
      return getById(ids[0]);
    });
}
