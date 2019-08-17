const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findTasks,
  add,
  findTaskById,
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

function findTasks(id) {
  return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select(
      't.id',
      't.task_number',
      'p.id as project_id',
      'p.project_name as project',
      't.instructions'
    )
    .where('p.id', id);
}

function findTaskById(id) {
  return db('tasks')
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

async function update(changes, id) {
  await db('projects')
    .where({ id })
    .update(changes);
  return findById(id);
}

async function update(changes, id) {
  await db('tasks')
    .where({ id })
    .update(changes);
  return findTaskById(id);
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

function remove(id) {
  return db('tasks')
    .where({ id })
    .del();
}
