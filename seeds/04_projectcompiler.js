
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectcompiler').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectcompiler').insert([
        {projectId: 1, actionId: 1, contextId: 3},
        {projectId: 2, actionId: 2, contextId: 2},
        {projectId: 3, actionId: 3, contextId: 1},
        {projectId: 1, contextId: 2},
        {projectId: 1, actionId: 3, contextId: 1},
        {projectId: 3, actionId: 3},
        {actionId: 1, contextId: 1},
      ]);
    });
};
