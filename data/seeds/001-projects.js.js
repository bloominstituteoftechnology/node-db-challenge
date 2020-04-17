
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {			projects_name: 'Project 1',
        projects_description: 'Description 1',
        projects_completed: 0
      },
        {			projects_name: 'Project 2',
        projects_description: 'Description 2',
        projects_completed: 0
      },
        {			projects_name: 'Project 3',
        projects_description: 'Description 3',
        projects_completed: 0
      }
      ]);
    });
};
