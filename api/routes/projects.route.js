const knex = require('../../database/db.js');

module.exports = (server) => {

  // Create
  server.post('/api/project', function(req, res) {

  });

  // Read
  // Get all Projects
  server.get('/api/projects', function(req, res) {

  });
  // Get Project by id
  server.get('/api/project/:id', function(req, res) {

  });

  // Update
  // Update Project by id
  server.put('/api/project/:id', function(req, res) {

  });

  // Delete
  // Delete all Projects
  server.delete('/api/projects', function(req, res) {

  });
  // Delete Project by id
  server.delete('/api/project/:id', function(req, res) {

  });

};