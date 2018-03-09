
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectTracker').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectTracker').insert([
        {id: 1, project_id: 1, action_id: 2, context_id: 3},
        {id: 2, project_id: 3, action_id: 1, context_id: 2},
        {id: 3, project_id: 2, action_id: 3, context_id: 1},
      ]);
    });
};
