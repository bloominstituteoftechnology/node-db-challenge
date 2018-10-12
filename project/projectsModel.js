const knex = require('knex');

const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getProject,
    addProject,
    addAction,
  };
  
  function addProject(project) {
    return db('projects')
      .insert(project)
      .into('projects');
  }
  
  function getProject(id) {
    return db('projects')
      .select({
        project_name: 'projects.name',
        action_name: 'actions.name',
      })
      .join('actions', 'actions.project_id', 'projects.id')
      .where('projects.id', id);
  }
  
  function addAction(action) {
    return db('actions')
    .insert(action);
  }

  
  // module.exports = {
//   addProject(project) {
//     return db('projects')
//       .insert(project)
//       .into('projects');
//   },