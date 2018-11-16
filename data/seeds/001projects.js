
exports.seed = function (knex, Promise) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        { name: 'Project 1', description: 'Project 1 description' },
        { name: 'Project 2', description: 'Project 2 description' },
        { name: 'Project 3', description: 'project 3 description' }
      ]);
    });
};