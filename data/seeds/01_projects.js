
exports.seed = function(knex, Promise) {
  return knex('projects').truncate()
    .then(function () {
      return knex('projects').insert([
        {name: 'project 1', description: 'description 1'},
        {name: 'project 2', description: 'description 2'},
        {name: 'project 3', description: 'description 3'}
      ]);
    });
};
