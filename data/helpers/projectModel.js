const db = require('../dbConfig.js');
const mappers = require('./mappers');

module.exports = {
  get,
  getProjectActions,
  insert,
  remove
}
function get(id) {
    let query = db('project as p');

    if (id) {
      query.where('p.id', id).first();

      const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

      return Promise.all(promises).then(function(results) {
        let [project, actions] = results;
        project.actions = actions;

        return mappers.projectToBody(project);
      });
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectToBody(project));
    });
  }
function getProjectActions(projectId) {
    return db('action')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  }
function insert(project) {
    return db('project')
      .insert(project)
      .then(([id]) => this.get(id));
  }
function remove(id) {
    return db('project')
      .where('id', id)
      .del();
  }
