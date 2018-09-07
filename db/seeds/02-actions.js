
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {name: 'Find the phonebook', project_id: 1},
        {name: 'Call the potbellied pigs company', project_id: 10},
        {name: 'Order the pigs', project_id: 10},
      ]);
    });
};
