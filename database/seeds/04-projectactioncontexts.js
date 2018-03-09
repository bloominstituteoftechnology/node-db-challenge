exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectactioncontexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projectactioncontexts').insert([
        { id: 1, projectId: 1, actionId: 1, contextId: 2 },
        { id: 2, projectId: 2, actionId: 2, contextId: 3 },
        { id: 3, projectId: 2, actionId: 3, contextId: 3 },
        { id: 4, projectId: 2, actionId: 3, contextId: 6 },
        { id: 5, projectId: 2, actionId: 4, contextId: 3 },
        { id: 6, projectId: 2, actionId: 4, contextId: 5 },
        { id: 7, projectId: 2, actionId: 5, contextId: 5 },
        { id: 8, projectId: 2, actionId: 5, contextId: 3 },
        { id: 9, projectId: 2, actionId: 5, contextId: 4 },
        { id: 10, projectId: 3, actionId: 6, contextId: 3 },
        { id: 11, projectId: 3, actionId: 7, contextId: 5 },
        { id: 12, projectId: 3, actionId: 7, contextId: 3 },
        { id: 13, projectId: 3, actionId: 8, contextId: 5 },
      ]);
    });
};
