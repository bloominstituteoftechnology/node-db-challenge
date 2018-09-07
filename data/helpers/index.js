const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  getProjects: function() {
    let query = db('projects');

    return query.then(projects => {
      return projects.map(project => mappers.projectMapper(project));
    });
  },

  getProject: function(id) {
    let project = db('projects as p')
      .where('p.id', id)
      .first();

    const promises = [project, this.getActionsByProject(id)];

    return Promise.all(promises).then(results => {
      let [project, actions] = results;
      if (!project) return null;
      project.actions = actions;

      return mappers.projectMapper(project);
    });
  },

  deleteProject: function(id) {
    return db('projects as p')
      .where('p.id', id)
      .del();

    // const promises = [project, this.getActionsByProject(id).del()];

    // return Promise.all(promises).then(results => {
    //   [projects, actions] = results;
    //   console.log(actions);
    //   return projects;
    // });
  },

  getActionsByProject: function(projectId) {
    return db('actions')
      .select('id', 'description', 'notes', 'completed')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionMapper(action)));
  },
};
