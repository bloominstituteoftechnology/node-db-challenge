const db = require('../data/db-config');

module.exports = {
  getProjects,
  getProjectById,
  getTasks,
  getResources,
  addProject,
  addTask,
  addResource,
  updateProject,
  deleteProject,
};

function getProjects() {
  return db('projects');
}

function getProjectById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function getTasks(id) {
  return db('projects as p')
    .join('tasks as t', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed')
    .where('t.project_id', id);
}

function getResources(id) {
  return db('projects as p')
    .join('project-resources as pr', 'pr.project_id', 'p.id')
    .join('resources as r', 'r.id', 'pr.resource_id')
    .select('r.id', 'r.name', 'r.description')
    .where('pr.project_id', id);
}

function addProject(project) {
  return db('projects as p')
    .insert(project)
    .then(([projectId]) => getProjectById(projectId));
}

function addTask(id, task) {
  return db('tasks')
    .insert({ ...task, project_id: id })
    .then(([taskId]) => getTasks(id));
}

function addResource(id, resource) {
  
}

function updateProject(id, changes) {}

function deleteProject(id) {}