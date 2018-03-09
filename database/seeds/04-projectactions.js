exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectactions')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('projectactions').insert([
        { id: 1, projectId: 1, actionId: 1 },
        { id: 2, projectId: 2, actionId: 2 },
        { id: 3, projectId: 2, actionId: 3 },
        { id: 4, projectId: 2, actionId: 4 },
        { id: 5, projectId: 2, actionId: 5 },
      ]);
    });
};
