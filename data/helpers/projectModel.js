const knex = require('knex')
const knexConfig = require('../../knexfile.js');
const db = knex(knexConfig.development)

module.exports = {
  find,
  findById,
  insert,
}


function find() {
  return db('Projects')
}

function findById(id) {
  console.log('ID:', id);
  return db('Projects')
    .where({ 'Projects.id': Number(id) })
    .innerJoin('Actions', 'Projects.id', 'Actions.project_id')
    .select({
      projectId: 'Projects.id',
      projectName: 'Projects.name',
      projectDescription: 'Projects.description',
      projectCompleted: 'Projects.completed',
      actionId: 'Actions.id',
      actionDescription: 'Actions.description',
      actionNotes: 'Actions.notes',
      actionCompleted: 'Actions.completed',
    })
}

function insert(project) {
  return db('Projects')
    .insert(project)
}
