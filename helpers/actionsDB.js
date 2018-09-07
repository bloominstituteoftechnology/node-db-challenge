const knex = require("knex");
const dbconfig = require("../knexfile");
const db = knex(dbconfig.development);

module.exports = {
  getActions: function(id) {
    if (id) {
      return db("actions")
      .where("actions.id", id);
      };
    return db("actions");
  },

  addAction: function(input) {
    const action = input;
    if (action != null && action.name != "") {
      return db("actions").insert(action);
    }
  },

  editAction: function(id, input){
    return db("actions")
    .where({ id: id })
    .update(input)
  },

  deleteAction: function(id){
    return db("actions")
    .delete()
    .where({ id: id })
  }
};


