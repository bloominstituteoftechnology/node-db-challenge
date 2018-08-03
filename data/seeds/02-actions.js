
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {projects_id: 1, description: 'Build the database and tables using knex migrations.'},
        {projects_id: 1, description: 'Build the API to perform CRUD operations on projects and actions.'},
        {projects_id: 1, description: 'Build an endpoint to retrieve a project by its id that returns an object.'}
      ]);
    });
};
