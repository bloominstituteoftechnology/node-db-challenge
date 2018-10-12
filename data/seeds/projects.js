
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1, 
          name: 'Sprint Challenge',
          description: 'Build the database and tables using knex migrations.',
          completed: false
        },
        {
          id: 2, 
          name: 'Sprint Challenge Cont.',
          description: 'Build the API to add projects and actions.',
          completed: false
        },
      ]);
    });
};
