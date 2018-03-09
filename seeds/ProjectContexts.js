
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project_Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Contexts').insert([
        {projectId: 1, contextId: 1},
        {projectId: 2, contextId: 2},
        {projectId: 3, contextId: 2},
      ]);
    });
};
