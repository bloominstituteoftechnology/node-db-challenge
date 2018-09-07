const knex = require("knex");
const dbconfig = require("../knexfile");
const db = knex(dbconfig.development);

module.exports = {
  getProjects: function(id) {
    if (id) {
      const promises = [db("projects"), this.getActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [projects, actions] = results;
        let project = projects[id - 1];
        project.actions = actions.map(a => {
            return {name: a.action_name, 
            description: a.description, 
            notes: a.notes,
            complete: a.completed}
        });
        return project;
      });
    }
    return db("projects");
  },

  getActions: function(id) {
    return db("projects")
      .join("actions", "actions.project_id", "projects.id")
      .where("projects.id", id);
  },

  addProject: function(input) {
    const project = input;
    if (project != null && project.name != "") {
      return db("projects").insert(project);
    }
  },

  editProject: function(id, input){
    return db("projects")
    .where({ id: id })
    .update(input)
  },

  deleteProject: function(id){
    return db("projects")
    .delete()
    .where({ id: id })
  }
};
