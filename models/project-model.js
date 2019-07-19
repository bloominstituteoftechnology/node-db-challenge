const db = require('../data/');

module.exports = {
  find, findById, add, update, remove
}

function find() {
  return db('projects');
}

async function findById(project_id) {
  let project = await db('projects')
    .where({ id: project_id })
    .first() || null;
  const actions = await db('actions')
    .join('projects', 'actions.project_id', 'projects.id')
    .where({ project_id })
    .select('actions.id', 'actions.description', 'actions.notes', 'actions.completed');
  if (project && actions) project.actions = actions;
  return project ? project : null;
}

async function add(project) {
  const [id] = await db('projects')
    .insert(project, 'id')
    .returning('*');
  return findById(id);
}

async function update(changes, id) {
  await db('projects')
    .where({ id })
    .update(changes);
  return findById(id);
}

async function remove(id) {
  const removedProject = await findById(id)
  const removed = await db('projects')
    .where({ id })
    .del();
  return removed ? removedProject : null;
}