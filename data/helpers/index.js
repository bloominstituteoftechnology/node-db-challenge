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
    let actions = db('actions as a')
      .select('a.id', 'a.description', 'a.notes', 'a.completed')
      .where('a.project_id', id);

    const promises = [project, actions];

    return Promise.all(promises).then(results => {
      let [project, actions] = results;
      if (!project) return null;
      project.actions = actions;

      return mappers.projectMapper(project);
    });
  },
};
