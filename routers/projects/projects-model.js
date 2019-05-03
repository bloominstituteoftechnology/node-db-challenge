const knex = require('knex')
const config = require('../../knexfile')
const mappers = require('./mappers');

const db = knex(config.development)

module.exports = {
    getProjects,
    getProject,
    addProject,
    getProjectActions
}

function getProjects() {
    return db('projects')
}

function getProject(id) {
    let query = db('projects as p');

  if (id) {
    query.where('p.id', id).first();

    const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [project, actions] = results;

      if (project) {
        project.actions = actions;

        return mappers.projectToBody(project);
      } else {
        return null;
      }
    });
    // return db('projects')
    //     .where({ id: Number(id) })
    //     .first()
}
}

function addProject(project) {
    return db('projects')
        .insert(project)
        .then(ids => ({ id: ids[0] }))
}

function getProjectActions(projectId) {
    return db('actions')
      .where('project_id', projectId)
      .then(actions => actions.map(action => mappers.actionToBody(action)));
  }