const dbConfig = require('./knexfile');

const knex = require('knex');

const db = knex(dbConfig.development);

module.exports = {
  addProject,
  addAction,
  getProjects,
  getProject,
  getActions,
  getActionsByProject
};

function addProject(project) {
  return db('projects').insert(project);
}

function addAction(action) {
  return db('action').insert(action);
}

function getProjects() {
  return db('projects');
}

function getProject(id) {
  let query = db('projects')
    .where({ id })
    .first();

  const promises = [query, getActionsByProject(id)];

  return Promise.all(promises).then(results => {
    let [project, actions] = results;
    // if no project, return null for better error handling
    if (!project) {
      return null;
    }

    project.completed = intToBoolean(project.completed);

    actions = actions.map(action => ({
      ...action,
      completed: intToBoolean(action.completed)
    }));

    project.actions = actions;
    return project;
  });
}

function getActions() {
  return db('actions');
}

function getActionsByProject(id) {
  // Getting all actions that are not completed
  return db('actions').where({ project_id: id, completed: false });
}

// SQLite represents booleans as 1s and 0s. This function converts the integer stored in the database to the boolean value it represents
function intToBoolean(int) {
  return int === 1 ? true : false;
}
