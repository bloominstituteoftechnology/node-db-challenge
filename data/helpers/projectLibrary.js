const db = require('../db');

module.exports = {
  get: (id) => {
    let projects = db('projects');

    if (id) {
      projects.where('id', id).first();
      const actions = [projects, db('actions').where('project_id', id)];
      return Promise.all(actions).then(results => {
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
    return db('projects').insert(project);
  },
  update: (id, editedProject) => {
    return db('projects').where('id', id).update(editedProject);
  },
  delete: (id) => {
    return db('projects').where('id', id).del();
  }
}
