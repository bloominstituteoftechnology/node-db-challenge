const db = require('../data/db-config.js');

// Get all projects
function find() {
  return db('projects');
}

// Add a projects
function add(projectsData) {
  return db('projects').insert(projectsData);
}

// Find Project by ID
function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

// Get resource for project
function findResources(id){
  return db('resource as r')
    .join('projects as p', 'p.id', 'r.project_id')
    .select('r.id', 'p.name', 'r.name')
    .where({projects_id: id})
}
// function findResources(id) {
//   return db('resources')
//       .select('resouces', 'projects.name', 'resources.name', 'resources.description')
//       .from('resources')
//       .join('projects', 'resources.id', 'projects.id')
//       .orderBy('resources.id');
// }

// Delete Project
function remove(id) {
  return db('projects').where({ id }).del();
}

module.exports = {
  find,
  add,
  findResources,
  remove, 
  findById
}