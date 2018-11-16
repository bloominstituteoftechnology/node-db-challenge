const express = require('express');
const knex = require('knex');
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)

const projects = require('./projects');
const actions = require('./actions');

const server = express();
server.use(express.json())

server.get('/', (req, res) => {
  res.json({ api: "running" })
})

server.use('/api/projects/', projects)
server.use('/api/actions/', actions)

module.exports = server;