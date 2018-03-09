const knex = require("../database/db");

const contexts = {
  getAll: () => {
    return knex("contexts");
  },
  addOne: context => {
    return knex("contexts").insert(context);
  },
  update: (id, context) => {
    return knex("contexts")
      .where({ id })
      .update(context);
  },
  nuke: id => {
    return knex("contexts")
      .where({ id })
      .del();
  }
};

module.exports = contexts;
