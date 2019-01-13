const db = require("../dbConfig.js");

module.exports = {
  insert: function(project) {
    return db("projects")
      .insert(project)
      .then(ids => ({
        id: ids[0]
      }));
  },
  getProject: function(projectId) {
    return db("projects").where("projects.id", projectId);
  }
};
