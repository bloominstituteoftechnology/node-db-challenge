const db = require('../../knexConfig');

module.exports = {
  getProjects,
  addProjects,
  updateProjects,
  deleteProjects
};

function getProjects(id) {
  if (id) {
    return db('project').where({ id: id });
  } else {
    return db('project');
  }
}

function addProjects(action) {
  return db('project').insert(action);
}

function updateProjects(action, id) {
  return db('project')
    .where({ id: id })
    .update(action);
}

function deleteProjects(id) {
  return db('project')
    .where({ id: id })
    .del();
}
