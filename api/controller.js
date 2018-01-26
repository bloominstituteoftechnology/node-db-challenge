const knex = require('../database/dbConfig');

module.exports = {
  async getProjects(id) {
    if (id) {
      const project = await knex('projects').where({ id })
        .first()
        .select('id', 'name', 'description', 'completed');
      const actions = await knex('actions')
        .where({ projectId: id })
        .select('id', 'description', 'notes', 'completed');
      const contexts = await knex('contexts as c')
        .join('projectscontexts as pc', 'c.id', 'pc.contextId')
        .where('pc.projectId', id)
        .select('c.id', 'c.context');
      project.completed === 1 ? project.completed = true : project.completed = false;
      project.actions = actions.map(a => {
        a.completed === 1 ? a.completed = true : a.completed = false
        return a;
      });
      project.contexts = contexts;
      return project;
    }
  }
};

