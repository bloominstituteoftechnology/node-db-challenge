const knex = require('../../database/db.js');

module.exports = (server) => {

  // Create
  server.post('/api/action', function(req, res) {

  });

  // Read
  // Get all Actions
  server.get('/api/actions', function(req, res) {

  });
  // Get Action by id
  server.get('/api/action/:id', function(req, res) {

  });

  // Update
  // Update Action by id
  server.put('/api/action/:id', function(req, res) {

  });

  // Delete
  // Delete all Actions
  server.delete('/api/actions', function(req, res) {

  });
  // Delete Action by id
  server.delete('/api/action/:id', function(req, res) {

  });

};