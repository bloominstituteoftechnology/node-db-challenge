exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'UI', description: 'UI', completed: 0},
        {name: 'Frontend', description: 'Frontend', completed: 0},
        {name: 'Backend', description: 'Backend', completed: 0}
      ]);
    });
};