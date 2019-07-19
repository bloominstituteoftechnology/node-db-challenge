const db = require('../data/');

module.exports = {
  find, findById, add, update, remove
}

function find() {
  return db('actions');
}

async function findById(action_id) {
  let action = await db('actions')
    .where({ id: action_id })
    .first() || null;
  console.log("action", action_id, action)
  const contexts = await db('actions_contexts')
    .join('contexts', 'actions_contexts.context_id', 'contexts.id')
    .where({ action_id })
    .select('*');
  console.log(contexts);
  if (action && contexts) action.contexts = contexts;
  console.log(action);
  return action ? action : null;
}

async function add(action) {
  const [id] = await db('actions')
    .insert(action, 'id')
    .returning('*');
  return findById(id);
}

async function update(changes, id) {
  await db('actions')
    .where({ id })
    .update(changes);
  return findById(id);
}

async function remove(id) {
  const removedAction = await findById(id)
  const removed = await db('actions')
    .where({ id })
    .del();
  return removed ? removedAction: null;
}