const db = require('../data/');

module.exports = {
  find, findById, add
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