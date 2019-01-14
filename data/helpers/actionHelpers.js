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
        "id",
        "action_description as description",
        "notes",
        "action_complete as complete"
      )
      .where("project_id", projectId);
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
  },
  getAction: function(id) {
    return db("actions")
      .select(
        "id",
        "action_description as description",
        "notes",
        "action_complete as completed"
      )
      .where("id", id);
  },
  getActionContexts: function(id) {
    return db("contexts")
      .select("context")
      .where("action_id", id);
  }
};
