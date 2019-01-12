const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);

module.exports = {
  getProjects,
  getProject
}

function getProjects(res){
 return db('projects');
}

function getProject(res){
  return db('actions')
 .join({"projects.id": "actions.project_id"})
  .where({ "actions.project_id": 'id' });
 }