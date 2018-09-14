
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'first', description: 'first', completed: 'false'},
        {name: 'second', description: 'second', completed: 'true'},
        {name: 'third', description: 'third', completed: 'false'}
      ]);
    });
};
