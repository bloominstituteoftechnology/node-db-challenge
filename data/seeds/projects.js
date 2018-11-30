
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Pack', description: 'Everything needs to be packed for the move', completed: false },
        {name: 'Earn Cash', description: 'Need extra cash for the OneWheel XR', completed: false }
      ]);
    });
};
