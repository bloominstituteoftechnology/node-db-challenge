
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Keep on', description:'keeping on...'},
        {name: 'Conquer Anxiety', description:'Rid world of anxiety...'},
        {name: 'Conquer Epilepsy', description:'Rid world of epilepsy...'}
      ]);
    });
};
