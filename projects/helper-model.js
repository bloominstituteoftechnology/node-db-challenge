const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findActions,
  add,
  findActionById,
  addAction,
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

function findActions(id) {
  return db('actions as a')
    .join('projects as p', 'a.project_id', 'p.id')
    .select(
      'a.id',
      'a.action_number',
      'p.id as project_id',
      'p.project_name as project',
      'a.instructions'
    )
    .where('p.id', id);
}

function findActionById(id) {
  return db('actions')
    .where({ id })
    .first();
}

async function add(project) {
  const [id] = await db('projects').insert(project);
  return findById(id);
}

async function addAction(action) {
  const [id] = await db('actions').insert(action);
  return findActionById(id);
}

async function update(changes, id) {
  await db('projects')
    .where({ id })
    .update(changes);
  return findById(id);
}

async function update(changes, id) {
  await db('actions')
    .where({ id })
    .update(changes);
  return findByActionId(id);
}

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}
