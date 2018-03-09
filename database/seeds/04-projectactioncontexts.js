exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectactioncontexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projectactioncontexts').insert([
        { id: 1, actionId: 1, contextId: 2 },
        { id: 2, actionId: 2, contextId: 3 },
        { id: 3, actionId: 3, contextId: 3 },
        { id: 4, actionId: 3, contextId: 6 },
        { id: 5, actionId: 4, contextId: 3 },
        { id: 6, actionId: 4, contextId: 5 },
        { id: 7, actionId: 5, contextId: 5 },
        { id: 8, actionId: 5, contextId: 3 },
        { id: 9, actionId: 5, contextId: 4 },
        { id: 10, actionId: 6, contextId: 3 },
        { id: 11, actionId: 7, contextId: 5 },
        { id: 12, actionId: 7, contextId: 3 },
        { id: 13, actionId: 8, contextId: 5 },
        { id: 14, projectId: 1, contextId: 1 },
        { id: 15, projectId: 1, contextId: 2 },
        { id: 16, projectId: 1, contextId: 3 },
        { id: 17, projectId: 1, contextId: 5 },
        { id: 18, projectId: 1, contextId: 6 },
        { id: 19, projectId: 2, contextId: 3 },
        { id: 20, projectId: 2, contextId: 5 },
        { id: 21, projectId: 3, contextId: 3 },
        { id: 22, projectId: 3, contextId: 5 },
      ]);
    });
};
