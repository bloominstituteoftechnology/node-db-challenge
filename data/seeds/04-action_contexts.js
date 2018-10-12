exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("action_contexts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("action_contexts").insert([
        { action_id: 1, context_id: 1 },
        { action_id: 1, context_id: 2 },
        { action_id: 1, context_id: 3 },
        { action_id: 2, context_id: 1 },
        { action_id: 3, context_id: 2 },
        { action_id: 3, context_id: 3 }
      ]);
    });
};
