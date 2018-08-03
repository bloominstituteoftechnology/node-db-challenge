
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {project_id: 1, description: 'Setup server and dependencies', notes: 'Use npm init and npm install'},
        {project_id: 1, description: 'Create database', notes: 'Use knex migration'},
        {project_id: 1, description: 'Create endpoints for projects and actions', notes: 'Use express router'}
      ]);
    });
};
