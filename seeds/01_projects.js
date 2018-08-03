
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description: 'Description 1'},
        {name: 'Project 2', description: 'Description 2'},
        {name: 'Project 3', description: 'Description 3'}
      ]);
    });
};
