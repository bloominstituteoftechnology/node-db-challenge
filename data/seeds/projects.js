
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Name 1', description: 'description 1', completed: false},
        {name: 'Name 2', description: 'description 2', completed: false},
        {name: 'Name 3', description: 'description 3', completed: false}
      ]);
    });
};
