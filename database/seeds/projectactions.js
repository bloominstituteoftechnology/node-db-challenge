
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('projectactions').insert([
        {projectId: '1', actionId: '1'},
        {projectId: '2', actionId: '4'},
        {projectId: '3', actionId: '5'},
        {projectId: '4', actionId: '6'},
        {projectId: '4', actionId: '7'},
        {projectId: '4', actionId: '8'},
        {projectId: '4', actionId: '9'},
        {projectId: '4', actionId: '10'}
      ]);
    });
};
