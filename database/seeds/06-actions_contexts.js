
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('actions_contexts').insert([
        {id: 1, actionId: 1, contextId: 1},
        {id: 2, actionId: 2, contextId: 1},
        {id: 3, actionId: 3, contextId: 3},
        // {id: 4, actionId: 3, contextId: 1},
        // {id: 5, actionId: 3, contextId: 3},
        // {id: 6, actionId: 4, contextId: 1},
        // {id: 7, actionId: 5, contextId: 1},
        // {id: 8, actionId: 5, contextId: 2}
      ]);
    });
};
