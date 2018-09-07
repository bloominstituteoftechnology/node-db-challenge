
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'project name 1', description: "project description 1"},
        {name: 'project name 2', description: "project description 2"},
        {name: 'project name 3', description: "project description 3"}
      ]);
    });
};
