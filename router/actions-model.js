const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("actions")
    .join("projects", "actions.project_id", "=", "projects.id")
    .select(
      { project: "projects.name" },
      { "project description": "projects.description" },
      { "action id": "actions.id" },
      "actions.description",
      "actions.notes",
      "actions.completed",
      "actions.created_at",
      "actions.updated_at"
    );
}

function findById() {
  return db("actions")
    .where({ "actions.project_id": id })
    .first()
    .join("projects", "actions.project_id", "=", "projects.id")
    .select(
      { project: "projects.name" },
      { "project description": "projects.description" },
      { "action id": "actions.id" },
      "actions.description",
      "actions.notes",
      "actions.completed",
      "actions.created_at",
      "actions.updated_at"
    );
}

function add(action) {
  return db("actions")
    .insert(action, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update() {
  return db("actions")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove() {
  return db("actions")
    .where({ id })
    .del();
}
