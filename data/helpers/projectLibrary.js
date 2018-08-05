const db = require('../db');
const mappers = require('./mappers');

module.exports = {
  get: (id) => {
    let query = db('projects');

    if (id) {
      const promise = [query.where('id', id).first(), db('actions').where('project_id', id)];
      return Promise.all(promise).then(results => {
        if (results[0] === undefined) { return null };
        if (results[1].length > 0) {
          let [project, projectActions] = results;
          project.actions = projectActions;
          return mappers.projectBool(project);
        }
        return mappers.projectBool(results[0]);
      })
    }

    return query.then(projects => {
      return projects.map(project => mappers.projectBool(project));
    });
  },

  insert: (project) => {
    return db('projects').insert(project)
                         .then(([id]) => module.exports.get(id));
  },

  update: (id, editedProject) => {
    return db('projects').where('id', id)
                         .update(editedProject)
                         .then(count => (count > 0 ? module.exports.get(id) : 0));
  },
  
  delete: (id) => {
    return db('projects').where('id', id).del();
  }
}
