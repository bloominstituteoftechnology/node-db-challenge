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

const add = () => {
  return true;
};

const update = () => {
  return true;
};

const remove = () => {
  return true;
};

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};
