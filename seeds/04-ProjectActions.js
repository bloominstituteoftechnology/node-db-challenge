
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project_Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Actions').insert([
        {projectId: 1, actionId: 1},
        {projectId: 1, actionId: 2},
        {projectId: 2, actionId: 3},
      ]);
    });
};
