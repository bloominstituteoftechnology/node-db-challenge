const knex = require('../database/dbConfig');

const projects_db = {
  addProject: function(project) {
    return knex.insert(project).into('Projects');
  },
  allProjects: function() {
    return knex('Projects');
  },
  getID: function(id) {
    return knex('Projects').where({ id });
  },
  updateProject: function(id, project) {
    return knex('Projects').where({ id }).update(project);
  },
  deleteProject: function(id) {
    return knex('Projects').where({ id }).del();
  },
  projectId(id) {
    return knex('projects_contexts').where({ projectId: id })
      .join('Projects', 'Projects.id', 'projects_contexts.projectId')
      .join('Contexts', 'Contexts.id', 'projects_contexts.contextsId')
      .join('actions_contexts', 'actions_contexts.id', 'Contexts.id')
      .join('Actions', 'Actions.id', 'actions_contexts.actionsId')

  }

}

module.exports = projects_db;