const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findTasks,
  findResources,
  add,
  findTaskById,
  findResourceById,
  addResource,
  addTask,
  update,
  remove
};

function find() {
  return db('projects');
}

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
}

function findTasks(project_id) {
  return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select(
      't.id as task_id',
      't.task_name as task',
      't.description',
      't.notes',
      't.completed',
      'p.id as project_id',
      'p.project_name as project'
    )
    .where({ project_id });
}

function findResources(project_id) {
  return db('resources as r')
    .join('projects as p', 'p.id', 'r.project_id')
    .select(
      'r.id as resource_id',
      'r.resource_name',
      'r.description',
      'p.id as project_id',
      'p.project_name as project'
    )
    .where({ project_id });
}

function findTaskById(id) {
  return db('tasks')
    .where({ id })
    .first();
}

function findResourceById(id) {
  return db('resources')
    .where({ id })
    .first();
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}

async function addTask(task) {
  const [id] = await db('tasks').insert(task);
  return findTaskById(id);
}

async function addResource(resource) {
  const [id] = await db('resources').insert(resource);
  return findTaskById(id);
}

async function update(changes, id) {
  await db('projects')
    .where({ id })
    .update(changes);
  return findById(id);
}

// async function update(changes, id) {
//   await db('tasks')
//     .where({ id })
//     .update(changes);
//   return findTaskById(id);
// }

// async function update(changes, id) {
//   await db('resources')
//     .where({ id })
//     .update(changes);
//   return findResourceById(id);
// }

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

// function remove(id) {
//   return db('tasks')
//     .where({ id })
//     .del();
// }

// function remove(id) {
//   return db('resource')
//     .where({ id })
//     .del();
// }
