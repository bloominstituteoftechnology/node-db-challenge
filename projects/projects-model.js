const db = require('../data/db-config.js');

function find() {
  return db('projects');
}
function findById(id) {
  return db('projects').where({ id });
}

function addProject(projectData) {
  return db('projects')
    .insert(projectData);
}
function findProjectResources(id) {
  return db('project-resources as pr')
    .join('resources as r', 'r.id', 'pr.resource_id')
    .select('r.id', 'r.resource_name', 'r.resource_description')
    .where({ 'pr.project_id': id });
}

// function findProjectTasks(id) {
//   return db('project_task as pt')
//     .join('tasks as t', 't.id', 'pt.task_id')
//     .join('projects as p', 'p.id', 'pt.project_id')
//     .select('p.project_name', 'p.project_description', 't.task_name', 't.notes')
//     .where({ 'pt.project_id': id });
// }
function findProjectTasks(id) {
  return db('project_task as pt')
    .join('tasks as t', 't.id', 'pt.task_id')
    .select('t.id', 't.task_name', 't.notes', 't.completed')
    .where({ 'pt.project_id': id });
}
function addResources(resource, id) {
  return db('resources as r')
    .join('project-resources as pr', 'pr.resource_id', 'r.id')
    .join('projects as p', 'p.id', 'pr.project_id')
    .select('p.id', 'r.resource_name', 'r.resource_description')
    .where({ 'pr.project_id': id })
    .insert(resource);
}
// function findFullProject(id, Promise) {
//   return db('projects as p')
//     .join('project_task as pt', 'p.id', 'pt.project_id')
//     .join('tasks as t', 't.id', 'pt.task_id')
//     .select('p.*', 't.*')
//     .where({ 'pt.project_id': id })
//     .then((db('resources as r')
//       .join('project-resource as pr', 'r.id', 'pr.resource_id')
//       .select('r.*')
//     ));
// }
// function findFullProject(id) {
//   const project = findById(id);
//   const tasks = findProjectTasks(id);
//   const resources = findProjectResources(id);
//  // project.tasks = tasks;
//   // project.resources = resources;
//  // console.log(project);
//   return (project, tasks, resources);
// }

module.exports = {
  find,
  findById,
  addProject,
  findProjectResources,
  addResources,
  findProjectTasks,
  findFullProject,
};
