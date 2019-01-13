const db = require("../dbConfig.js");

module.exports = {
  insert: function(action) {
    return db("actions")
      .insert(action)
      .then(ids => ({
        id: ids[0]
      }));
  },
  getActionsByProjectId: function(projectId) {
    return db("actions")
      .select(
        "actions.id",
        "actions.action_description as description",
        "actions.notes",
        "actions.action_complete as complete"
      )
      .where("actions.project_id", projectId);
  },
  getAll: function() {
    return db("actions");
  },
  update: function(id, change) {
    return db("actions")
      .where("id", id)
      .update(change);
  },
  remove: function(id) {
    return db("actions")
      .where("id", id)
      .del();
  }
};
