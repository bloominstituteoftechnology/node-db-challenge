exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectcontexts')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projectcontexts').insert([
        { id: 1, projectId: 1, contextId: 1 },
        { id: 2, projectId: 1, contextId: 2 },
        { id: 3, projectId: 1, contextId: 3 },
        { id: 4, projectId: 1, contextId: 5 },
        { id: 5, projectId: 2, contextId: 3 },
        { id: 6, projectId: 2, contextId: 5 },
      ]);
    });
};
