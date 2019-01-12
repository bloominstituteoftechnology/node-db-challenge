
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'project name here', project_description: 'the project description' },
        { project_name: 'project name here 2', project_description: 'project description 2' },
        { project_name: 'project name here 3', project_description: 'project description 3' }
      ]);
    });
};
