
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_contexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_contexts').insert([
        {id: 1, projectId: 1, contextsId: 1 },
        {id: 2, projectId: 3, contextsId: 1},
        {id: 3, projectId: 2, contextsId: 2},
        {id: 4, projectId: 3, contextsId: 3}
      ]);
    });
};
