const config = require('../knexfile.js');
const knex = require('knex');
const db = knex(config.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('actions');
}

function findById(id) {
  return db('actions')
    .where({ id })
    .first();
}

function findByProjectId(project_id){
return db('actions')
	.where({project_id});
}

function add(action) {
  return db('actions')
    .insert(action)
    .into('actions');
}

function update(id, changes) {
  return db('actions')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
}