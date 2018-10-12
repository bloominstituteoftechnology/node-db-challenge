const knex = require("knex");

//set up database access
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

const find = () => {
  return db("projects");
};

const findById = id => {
  return db("projects")
    .where({ id })
    .first();
};

const getProjectActions = id => {
  return db
    .where({ project_id: id })
    .select("id", "description", "notes", "complete")
    .from("actions");
};

const insert = newProject => {
  return db("projects").insert(newProject);
};

const insertAction = action => {
  console.log(action);
  return db("actions").insert(action);
};
module.exports = { find, insert, findById, getProjectActions, insertAction };
