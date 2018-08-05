const db = require('../db');

module.exports = {
  get: (id) => {
    let projects = db('projects');

    if (id) {
      const promise = [projects.where('id', id), db('actions').where('project_id', id)];
      return Promise.all(promise).then(results => {
        if (results[1].length > 0) {
          let [project, projectActions] = results;
          project.actions = projectActions;
          return project;
        }
        return results[0];
      })
    }

    return projects;
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
