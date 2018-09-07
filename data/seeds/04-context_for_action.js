
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('context_for_action').del()
    .then(function () {
      // Inserts seed entries
      return knex('context_for_action').insert([
        {id: 1, action_id: 1, context_id: 1},
        {id: 2, action_id: 2, context_id: 2},
        {id: 3, action_id: 3, context_id: 3}
      ]);
    });
};
