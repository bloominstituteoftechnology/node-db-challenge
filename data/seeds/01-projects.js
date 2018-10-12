
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Sleep Project', description: 'Eat a lot!'},
        {name: 'Eat Project', description: 'Sleep a lot!'},
        {name: 'Program Project', description: 'Program a lot!'}
      ]);
    });
};
