
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actioncontext').del()
    .then(function () {
      // Inserts seed entries
      return knex('actioncontext').insert([
        {actionId: 1, contextId: 1},
        {actionId: 1, contextId: 3},
        {actionId: 2, contextId: 5},
        {actionId: 3, contextId: 2},
        {actionId: 4, contextId: 2},
        {actionId: 5, contextId: 2}
      ]);
    });
};
