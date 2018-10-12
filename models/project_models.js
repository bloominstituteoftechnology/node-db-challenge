const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);
const dbActions = require('./action_models');

module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db('projects');
};

function findById(id) {
  return db('projects')
    .where({ id })
    .first();
};

function add(project) {
  return db('projects')
    .insert(project)
    .into('projects');
};

function update(id, change) {
  return db('projects')
    .where({ id })
    .update(change);
};

function remove(id) {
  return db('projects')
    .where({ id })
    .del();
};
