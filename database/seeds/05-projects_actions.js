
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_actions').insert([
        {id: 1, projectId: 1, actionId: 1},
        {id: 2, projectId: 1, actionId: 2}, // the actionId should be changed to 4
        {id: 3, projectId: 2, actionId: 3},
        // {id: 4, projectId: 3, actionId: 2},
        // {id: 5, projectId: 3, actionId: 5}
      ]);
    });
};
