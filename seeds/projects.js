
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del().truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'Project 1', description: "Project 1 description"},
        {name: 'Project 2', description: "Project 2 description"},
        {name: 'Project 3', description: "Project 3 description"}
      ]);
    });
};
