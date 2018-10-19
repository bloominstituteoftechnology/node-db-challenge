
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  // Changes to truncate, for ID order history
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'raking leaves', description: 'fall leaves', completed: false},
        {name: 'water lawn', description: 'grass needs water', completed: false},
        {name: 'sweep drive way', description: 'broom in garage', completed: true}
      ]);
    });
};
