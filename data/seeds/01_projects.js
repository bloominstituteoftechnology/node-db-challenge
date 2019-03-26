
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          id: 1,
          name: 'project name here',
          description: 'the project description',
          completed: false, // or true, the database will return 1 for true and 0 for false
          actions: [
            {
              id: 1,
              description: 'action description',
              notes: 'the action notes',
              completed: false // or true
            },
            {
              id: 7,
              description: 'another action description',
              notes: 'the action notes',
              completed: false // or true
            }
          ]
        }
      ]);
    });
};


