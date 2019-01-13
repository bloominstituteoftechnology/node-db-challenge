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
  },
  getAll: function() {
    return db("projects");
  },
  update: function(id, change) {
    return db("projects")
      .where("id", id)
      .update(change);
  },
  remove: function(id) {
    return db("actions")
      .where({ project_id: id })
      .del()
      .then(response => {
        console.log(response);
        db("projects")
          .where({ id: id })
          .del();
      });
  }
};
