const db = require('../data/db-config');

module.exports = {
  find,
  findById,
  findResource,
  findResourceById,
  insert,
  insertResource
}

function find() {
  return db('projects')
}

function findById(id) {
  return db('projects')
    .where({id})
    .first()
}

function insert(data) {
  return db('projects').insert(data, 'id')
    .then(([id]) => {
      return findById(id)
    })
}

function findResource(projectId) {
  return db('resources')
    .join('project_resources', 'resources.id', 'project_resources.resource_id')
    .where({'project_resources.project_id': projectId})
}

function findResourceById(id) {
  return db('resources')
    .where(({id}))
}

function insertResource(projectId, resource) {
  return db('resources').insert(resource)
    .then(([id]) => {
      return db('project_resources').insert({
        project_id: projectId,
        resource_id: id,
      })
    })
    .catch(() => {
      return findResourceById(id)
    })
}