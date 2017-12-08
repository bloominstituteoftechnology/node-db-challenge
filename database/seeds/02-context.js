
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        {id: 1, context: 'Garage'},
        {id: 2, context: 'Vehicle'},
        {id: 3, context: 'Bathroom'}
      ]);
    });
};
