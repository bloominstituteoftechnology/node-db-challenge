
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Test projects 1', description: 'Seeding projects'},
        {name: 'Test projects 2', description: 'Seeding projects'},
        {name: 'Test projects 3', description: 'Seeding projects'},
        {name: 'Test projects 4', description: 'Seeding projects'},
        {name: 'Test projects 5', description: 'Seeding projects'},
        {name: 'Test projects 6', description: 'Seeding projects'},
        {name: 'Test projects 7', description: 'Seeding projects'},
      ]);
    });
};
