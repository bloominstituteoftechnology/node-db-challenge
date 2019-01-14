const knex = require('knex');
const dbConfig = require('../knexfile');
const db = knex(dbConfig.development);
const mappers = require('./mappers');

module.exports = {
  get: function(id) {
    let query = db('project');

    if (id) {
      query.where('project.id', id).first();

      const promises = [query, this.getProjectActions(id)];

      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;

        return mappers.projectToBody(project);
      });
    }
    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }, 
  getProjectActions: function(projectId) {
    return db('action')
    .where('project_id', projectId)
    .then(actions => actions.map(action => mappers.actionToBody(action)));
  },
  insert: function(project) {
    return db('project')
      .insert(project)
      .then(([id]) => this.get(id));
  },
};