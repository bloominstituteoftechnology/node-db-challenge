
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'fork'},
        {id: 2, name: 'cement truck'},
        {id: 3, name: 'boat'}
      ]);
    });
};
