
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'blog app', description: '', complete: 0},
        {id: 2, name: 'notes app', description: '', complete: 0},
        {id: 3, name: 'OilBay website', description: '', complete: 0}
      ]);
    });
};
