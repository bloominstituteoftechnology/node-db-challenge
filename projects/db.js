const knex = require('knex');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  getProject,
  // getProjectActions,
  addProject,
  addActions,
};

function getProject(id) {
  return db('projects')
    .where({ id })
    .first()
    .then(project => {
      if (project) {
        return db('actions')
          .where({ project_id: id })
          .then(actions => {
            project = projectClean(project);
            actions = actionClean(actions);
            project.actions = actions;
            return project;
          });
      } else {
        return null;
      }
    });
}

// function getProject(id) {
//   let query = db('projects');
//   query.where({ id }).first();

//   const promises = [query, this.getProjectActions(id)];

//   return Promise.all(promises).then(results => {
//     let [ project, actions ] = results;

//     project = projectClean(project);
//     actions = actionClean(actions);
//     project.actions = actions;

//     return project;
//   })
// }

// function getProjectActions(projectId) {
//   return db('actions')
//     .where('project_id', projectId)
// }

function addProject(project) {
  return db('projects')
    .insert(project)
    .into('projects');
}

function addActions(action) {
  return db('actions')
    .insert(action)
    .into('actions');
}

//Helper functions
function toBoolean(int) {
  return int === 1 ? true : false;
}

function actionClean(actions) {
  actions = actions.map(action => {
    const { project_id, ...test } = action;
    return {
      ...test,
      completed: toBoolean(action.completed),
    };
  });
  return actions;
}

function projectClean(project) {
  return {
    ...project,
    completed: toBoolean(project.completed),
  };
}
