
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectcontexts').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectcontexts').insert([
        {projectId: '1', contextId: '1'},
        {projectId: '1', contextId: '2'},
        {projectId: '2', contextId: '2'},
        {projectId: '3', contextId: '1'},
        {projectId: '4', contextId: '2'},
        {projectId: '4', contextId: '3'}
      ]);
    });
};
