
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'actions say hi', description: 'learning backend'},
        {id: 2, name: 'actions have egos', description: 'backend lessons'}
      ]);
    });
};
