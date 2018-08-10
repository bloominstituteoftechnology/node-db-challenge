
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectId: 1, text: 'Paint the House'},
        {projectId: 2, text: 'Paint the fence'},
        {projectId: 3, text: 'Till and re-seed the lawn'}
      ]);
    });
};
