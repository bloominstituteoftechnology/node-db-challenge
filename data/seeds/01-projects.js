
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_name: 'HTML',proj_description: 'create HTML website',proj_completed: 0},
        {project_name: 'CSS',proj_description: 'use CSS to style page',proj_completed: 0},
        {project_name: 'LESS',proj_description: 'use LESS for styling',proj_completed: 1},
        {project_name: 'React',proj_description: 'create React front end',proj_completed: 0},
        {project_name: 'Express/Node',proj_description: 'create express app',proj_completed: 1},
        {project_name: 'SQLLite',proj_description: 'create data model',proj_completed: 0}

      ]);
    });
};
