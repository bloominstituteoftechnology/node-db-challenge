const db = require('../data/db.js');
const mappers = require('./mappers');

module.exports = {
  // Get
  read: function(id) {
    let query = db('projects');
    if (id) {
      query.where('projects.id', id).first();
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
    return db('actions')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  },
  // Add
  create: function(project) {
    return db('projects')
      .insert(project)
      .then(ids => ({ id: ids[0] }));
  },
  // Delete
  destroy: function (id) {
    return db('projects')
      .where('id', id)
      .del();
  },
  // Update
  update: function (id, user) {
    return db('projects')
      .where('id', id)
      .update(user)
      .then(count => (count > 0 ? this.get(id) : null));
  },
};