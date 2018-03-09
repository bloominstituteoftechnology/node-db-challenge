
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project_Actions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Actions').insert([
        {projectId: 1, actionId: 19},
        {projectId: 2, actionId: 20},
        {projectId: 3, actionId: 21},
      ]);
    });
};
