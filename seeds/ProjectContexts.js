
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Project_Contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('Project_Contexts').insert([
        {projectid: 1, contextId: 1},
        {projectid: 2, contextId: 2},
        {projectid: 3, contextId: 2},
      ]);
    });
};
