
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('actions_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions_contexts').insert([
        { id: 1, action_id: 1, context_id: 1 }
      ]);
    });
};
