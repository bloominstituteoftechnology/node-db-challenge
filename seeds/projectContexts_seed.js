
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectContexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectContexts').insert([
        {id: 1, projectId: 1, contextId: 1},
        {id: 2, projectId: 1, contextId: 5},
      ]);
    });
};
