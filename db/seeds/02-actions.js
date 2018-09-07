
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {action_name: 'Find the phonebook', project_id: 12},
        {action_name: 'Call the potbellied pigs company', project_id: 12},
        {action_name: 'Order the pigs', project_id: 12},
      ]);
    });
};
