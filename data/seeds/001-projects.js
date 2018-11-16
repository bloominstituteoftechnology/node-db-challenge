
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project1', description: 'lorem ipsum'},
        {name: 'project2', description: 'lorem ipsum'},
        {name: 'project3', description: 'lorem ipsum'}
      ]);
    });
};
