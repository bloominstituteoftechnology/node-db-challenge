const knex = require("../database/db");

const actions = {
  getAll: () => {
    return knex("actions");
  },
  addOne: action => {
    return knex("actions").insert(action);
  },
  update: (id, action) => {
    return knex("actions")
      .where({ id })
      .update(action);
  },
  nuke: id => {
    return knex("actions")
      .where({ id })
      .del();
  }
};

module.exports = actions;
