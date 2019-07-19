const db = require('../data/');

module.exports = {
  find, findById, add
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