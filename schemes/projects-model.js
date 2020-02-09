const db = require("../data/db-config.js");

const find = () => {
  return db("projects");
};

const findById = project_id => {
  if (project_id) {
    return db("projects")
      .where("id", project_id)
      .first();
  } else {
    return null;
  }
};

const add = project => {
  return db("projects").insert(project);
};

const update = (id, obj) => {
  return db("projects")
    .where({ id })
    .update(obj);
};

const remove = id => {
  return db("projects")
    .where({ id })
    .del();
};

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
