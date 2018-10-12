const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
  getProjectActions,
};


// function getProject(id) {
//   return db('projects')
//     .where({ id })
//     .first()
//     .join('actions', 'projects.id', '=', 'actions.project_id');
// }

function getProjectActions(id) {
  return db('actions as a')
    .join('projects as p', 'p.id', 'a.project_id')
    .select('p.id','p.name', 'p.description', 'p.completed', 'a.id', 'a.description', 'a.notes', 'a.completed' )
    .where('a.project_id', id);
}

// function getProjectActions(id) {
//   return db('projects as p')
//     .from('projects')
//     .join('actions as a', function() {
//       this.on(function() {
//         this.on('a.project_id', '=', 'p.id')
//       })
//     })
// }