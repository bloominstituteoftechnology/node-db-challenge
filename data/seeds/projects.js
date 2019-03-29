exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'React', project_description: 'Create a React App', project_complete: false},
        { project_name: 'Express', project_description: 'Create the Backend Server', project_complete: false},
        { project_name: 'SQL', project_description: 'Create the Backend Database', project_complete: false},
      ]);
    });
};