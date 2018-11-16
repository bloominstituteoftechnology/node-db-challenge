
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'UN', description: 'Save the world'},
        {id: 2, name: 'NASA', description: 'Save space'},
        {id: 3, name: 'Global Homies Fund', description: 'Save the homies' }
      ]);
    });
};
