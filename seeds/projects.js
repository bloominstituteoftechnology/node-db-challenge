exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Build this API', description: 'Sprint and write out a database with the appropriate tables'},
        {name: 'Project 2', description: 'Description 2'},
        {name: 'Project 3', description: 'Description 3'},
        {name: 'Project 4', description: 'Description 4'},
        {name: 'Project 5', description: 'Description 5'},
      ]);
    });
};
