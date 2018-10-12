
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'react app', description: 'lets build a portfolio page with react'},
        {name: 'painting', description: 'paint a portrait of the Mona Lisa'},
        {name: 'learn to play guitar', description: 'lets master guitar'}
      ]);
    });
};
