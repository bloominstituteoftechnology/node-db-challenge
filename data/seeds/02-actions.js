
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id: 1,
          description: 'Fork and Clone Repository',
          notes:
            'always remember to fork before you clone',
        },
        {
          project_id: 1,
          description: 'Build the database and tables using knex migrations.',
          notes: 'you can just type \'knex\' to see a list of knex commands',
        },
        {
          project_id: 1,
          description: 'Build the API to perform CRUD operations on projects and actions.',
          notes: 'get, post, put, delete',
        },
      ]);
    });
};
