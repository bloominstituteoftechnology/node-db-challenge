// const knex = require('knex')
// const knexConfig = require('../knexfile.js')
// const db = knex(knexConfig.development)

// function addProject(project) {
//   return db.insert(project)
//     .into('projects')
// }

// function addAction(action) {
//   return db.insert(action)
//     .into('actions')
// }

// function getProjectById(id) {
//   db('projects').where({ id })
//     .then(project => {
//       return db('actions')
//         .select('actions.id', 'actions.description', 'actions.notes', 'actions.completed')
//         .where({ 'project_id': id })
//         .then(actions => {
//           const completeProject = [
//             ...projects,
//             {actions}
//           ]
//           return completeProject
//         })
//         .catch(err => err);
//     })
//     .catch(err => err);
//   }

// module.exports = {
//   addProject,
//   addAction,
//   getProjectById
// }
