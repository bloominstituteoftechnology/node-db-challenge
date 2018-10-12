
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Project-1', description: '', completed: 0},
        {name: 'Project-2', description: '', completed: 0},
        {name: 'Project-3', description: '', completed: 0}
      ]);
    });
};
