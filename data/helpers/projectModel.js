const db = require('../dbConfig');

module.exports = {
  get,
  getWithActions,
  insert
};

function get(id) {
  let query = db('project');
  if (id) return query.where({ id: Number(id) }).first();
  return query;
}

function getWithActions(id, Promise) {
  // const project = db('project').where('id', id);
  const actions = db('action').where('project_id', id);
  return actions
}

function insert(project) {
  return db('project').insert(project);
}

// getWithActions(13).then(res => console.log(res))
