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
  return db('projects').where({ id });
}

// Get resource for project
function findResources(id) {
  return db('resources')
      .select('projects.id', 'projects.project_name', 'resources.resource_name', 'resources.description')
      .join('projects', 'resources.project_id', 'projects.id')
      .where('projects.id', id)
      .orderBy('resources.resource_name', 'asc');
}

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