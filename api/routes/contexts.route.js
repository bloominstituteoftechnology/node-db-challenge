const knex = require('../../database/db.js');

module.exports = (server) => {

  // Create
  server.post('/api/context', function(req, res) {

  });

  // Read
  // Get all contexts
  server.get('/api/contexts', function(req, res) {

  });
  // Get context by id
  server.get('/api/context/:id', function(req, res) {

  });

  // Update
  // Update context by id
  server.put('/api/context/:id', function(req, res) {

  });

  // Delete
  // Delete all contexts
  server.delete('/api/contexts', function(req, res) {
    
  });
  // Delete context by id
  server.delete('/api/context/:id', function(req, res) {

  });

};