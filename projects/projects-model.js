const db = require('../data/db-config.js');

function find() {
  return db('projects');
}
function findById(id) {
  return db('projects').where({ id }).first();
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
    .select('t.id', 'pt.project_id', 't.task_name', 't.notes', 't.completed')
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
function update(change, id) {
  return db('projects').where({ id }).update(change);
}
function remove(id) {
  return db('projects')
    .where({ id }).del();
}

// function findFullProject(id) {
//   return db('tasks as t')
//     .join('project_task as pt', 't.id', 'pt.task_id')
//     .join('projects as p', 'pt.project_id', 'p.id')
//     .join('project-resource as pr', 'p.id', 'pr.project_id')
//     .join('resources as r', 'r.id', 'pr.resource_id')
//     .select('p.*', 't.*', 'r.*')
//     .where({ 'p.id': id });
// }

// function findFullProject(id) {
//   const project = db('projects').where({ id });

//   const tasks = db('project_task as pt')
//     .join('tasks as t', 't.id', 'pt.task_id')
//     .select('t.id', 't.task_name', 't.notes', 't.completed')
//     .where({ 'pt.project_id': id });

//   const resources = db('project-resources as pr')
//     .join('resources as r', 'r.id', 'pr.resource_id')
//     .select('r.id', 'r.resource_name', 'r.resource_description')
//     .where({ 'pr.project_id': id });

//   const full = { ...project, ...tasks, ...resources };
//   console.log(full, 'full');
//   return full;
// }


module.exports = {
  find,
  findById,
  addProject,
  findProjectResources,
  addResources,
  findProjectTasks,
  // findFullProject,
  update,
  remove,
};
