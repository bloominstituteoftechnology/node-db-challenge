exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actioncontexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actioncontexts').insert([
        { id: 1, actionId: 1, contextId: 2 },
        { id: 2, actionId: 2, contextId: 3 },
        { id: 3, actionId: 2, contextId: 5 },
        { id: 4, actionId: 3, contextId: 3 },
        { id: 5, actionId: 3, contextId: 6 },
        { id: 6, actionId: 4, contextId: 3 },
        { id: 7, actionId: 4, contextId: 5 },
        { id: 8, actionId: 5, contextId: 3 },
        { id: 9, actionId: 5, contextId: 5 },
        { id: 10, actionId: 5, contextId: 4 },
      ]);
    });
};
