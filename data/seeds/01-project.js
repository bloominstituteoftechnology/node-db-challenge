
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {project_name: 'Restaurant Website', project_description: 'Create website for the restaurant', project_completed: false},
        {project_name: 'Cool app', project_description: 'Make an app that shows pictures of brisket', project_completed: false},
        {project_name: 'Google maps', project_description: 'rewrite google maps from scratch', project_completed: false}
      ]);
    });
};
