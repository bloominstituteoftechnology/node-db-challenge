const db = require("../dbConfig");

module.exports = {
  getProject: function(id) {
    let query = db("projects");
    if (id) {
      query.where("id", id);
    }
    return query;
  },
  getProjectActions: function(id) {
    return db("projects as p")
      .innerJoin("actions as a", "a.project_id", "p.id")
      .select("a.*")
      .where("p.id", id);
  },
  insert: function(project) {
    return db("projects")
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
};
