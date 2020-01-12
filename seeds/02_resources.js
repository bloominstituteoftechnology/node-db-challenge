
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, resource_name: 'Wood'},
        {id: 2, resource_name: 'Matches'},
        {id: 3, resource_name: 'Tent'},
        {id: 4, resource_name: 'Steak'},
        {id: 5, resource_name: 'Grill'},
        {id: 6, resource_name: 'Seasoning'}
      ]);
    });
};