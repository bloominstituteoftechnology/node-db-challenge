const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('actions');
};

function findById(id) {
  return db('actions')
    .where({ id })
    .first();
};

function findByProjectId(project_id) {
  return db('actions')
    .where({ project_id });
};

function add(action) {
  return db('actions')
    .insert(action)
    .into('actions');
};

function update(id, change) {
  return db('actions')
    .where({ id })
    .update(change);
};

function remove(id) {
  return db('actions')
    .where({ id })
    .del();
};
