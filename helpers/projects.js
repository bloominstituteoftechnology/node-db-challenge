const knex = require('knex');
const knexConfig = require('../knexfile.js');

db = knex(knexConfig.development);

module.exports = {
  get: function(id) {
    let query = db('projects as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;

        return project;
      });
    }

    return query;

  },
  getProjectActions: function(projectId) {
    return db('actions')
      .where('project_id', projectId)
      .then((actions) => {
        return actions;
      });
  },
  insert: function(project) {
    return db('projects')
      .insert(project)
      .then(([id]) => this.get(id));
  },
  update: function (id, changes) {
    return db('projects')
      .where('id', id)
      .update(changes)
      .then(count => (count > 0 ? this.get(id) : null));
  },
  delete: function (id) {
    return db('projects')
      .where('id', id)
      .del();
  }
}
