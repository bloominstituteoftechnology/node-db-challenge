
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contexts').insert([
        {action_id: 1, name: 'At computer'},
        {action_id: 2, name: 'In Maryland'},
        {action_id: 3, name: 'Watching HBO'}
      ]);
    });
};
