exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'example project name 1' , project_description: 'example project description 1' , project_completed: false},
        {project_name: 'example project name 2' , project_description: 'example project description 2' , project_completed: false},
        {project_name: 'example project name 3' , project_description: 'example project description 3' , project_completed: false}
      ]);
    });
};