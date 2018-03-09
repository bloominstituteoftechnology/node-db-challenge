const knex = require("../database/db.js");

const db = {
  getAll() {
    return knex("projects");
  },

  addProject(newProject) {
    return knex("projects").insert(newProject);
  },

  getById(id, flag) {
    if (flag === true) {
      const query = knex("projects as p")
        .where("project_id", id)
        .join("actions as a", "p.project_id", "a.action_id");
      const promises = [query, this.getContext(id)];
      return Promise.all(promises).then(results => {
        let [projects, contexts] = results;
        let context = contexts[0];
        context.contexts = contexts.map(c => c.context);
        return context;
      });
      // .select('p.name as project', 'p.description', 'a.description as action', 'notes')
      // .then(project => {
      //   return knex('projects as p').where('project_id', id)
      //     .join('context as c', 'c.project_id', 'p.project_id');
      // })
    } else {
      return knex("projects").where({ project_id: id });
    }
  },

  getContext(id) {
    return knex("projects as p")
      .where("p.project_id", id)
      .select("context")
      .join("contexts as c", "c.project_id", "p.project_id");
  },

  updateProject(id, updatedProject) {
    return knex('projects').where('project_id', id).update(updatedProject);
  },

  deleteProject(id) {
    return knex('projects').where('project_id', id).del();
  },

};

module.exports = db;
