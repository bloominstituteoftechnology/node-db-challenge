const db = require("../dbConfigure.js")
module.exports = {
  getProjects: function() {
    return db("projects")
  },
  getProject: function(id) {
    let query = db("projects")
    if (id) {
      query.where("id", Number(id)).first()
    }
    return query
  },
  addProject: function(project) {
    return db("projects")
      .insert(project)
      .then(ids => ({ id: ids[0] }))
  }
}
