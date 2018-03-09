
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_contexts').insert([
        {id: 1, projectId: 1, contextId: 1},
        {id: 2, projectId: 2, contextId: 1},
        {id: 3, projectId: 2, contextId: 3},
        // {id: 4, projectId: 3, contextId: 1},
        // {id: 5, projectId: 3, contextId: 2}
      ]);
    });
};
