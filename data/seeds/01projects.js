
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name: 'test name 1', project_description: 'meh meh description', project_complete: false},
        {name: 'test name 2', project_description: "description test", project_complete: false}
      ]);
    });
};
