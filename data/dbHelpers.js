const knex = require('knex');

const dbConfig = require('../knexfile.js')

const db = knex(dbConfig.development);

module.exports = {
getProjects: () => {
  return db('projects');
},
addProject: (project) => {
  return db("projects")
  .insert(project)
},
getActions: () => {
  return db('actions');
},
addAction: (action) => {
  return db("actions")
  .insert(action)
},
// getProjectByIdWithActions:(id)=>{
//   return db('projects')
//   .join('actions', 'projects.id', '=', 'actions.project_id')
//   .groupBy('actions.id')
//   .where({ "projects.id": id })
// }

getProjectByIdWithActions:(id)=>{
    return db('actions')
    .join('projects', 'projects.id', '=', 'actions.project_id')
    .where({ "projects.id": id })
  }
}