const db = require('../data/dbConfi');

module.exports = {
  getProjects,
  getProjectsById,
  addProjects,
  getResources,
  addResources,
  getAllResources,
  addResourceIndex,
  getTasks,
  addTasks,
};

function getProjects() {
  return db('projects');
}

function getAllResources() {
  return db('resources');
}

function getProjectsById(id) {
  return db('projects').where({ id }).first();
}

function getResources(id) {
  return db('projects')
    .join('project-resources', 'project-resources.project_id', 'projects.id')
    .join('resources', 'resources.id', 'project-resources.resource_id')
    .select('resources.id', 'resources.resource_name', 'resources.resource_description')
    .where('projects.id', id);
}

function getTasks(id) {
  return db('projects')
    .join('tasks', 'tasks.project_id', 'projects.id')
    .select(
      'tasks.id',
      'projects.project_name',
      'projects.project_description',
      'tasks.task_description',
      'tasks.task_notes',
      'tasks.task_completed'
    )
    .where('tasks.project_id', id);
}

function addProjects(project) {
  return db('projects').insert(project, 'id');
}

function addResourceIndex(resource) {
  return db('project-resources')
    .insert(resource)
    .then((ids) => ({ id: ids[0] }));
}

function addResources(resource) {
  return db('resources')
    .insert(resource)
    .then((ids) => ({ id: ids[0] }));
}

function addTasks(task) {
  return db('tasks').insert(task);
}
