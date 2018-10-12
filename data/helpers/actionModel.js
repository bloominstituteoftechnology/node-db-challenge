const knex = require("knex");

const knexConfig = require("../../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  getActions() {
    return db("actions");
  },

  addActions(action) {
    return db("actions").insert(action);
  }
};
