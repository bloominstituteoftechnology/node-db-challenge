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
  }
};
