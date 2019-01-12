
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'blog app'},
        {id: 2, name: 'notes app'},
        {id: 3, name: 'OilBay website'}
      ]);
    });
};
