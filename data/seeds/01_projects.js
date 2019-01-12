exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects')
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'First Project',
          project_description: 'Do this project before anything else!',
          completed: false
        },
        {
          project_name: 'Second Project',
          project_description: '',
          completed: false
        },
        {
          project_name: 'Third Project',
          project_description: 'This project can wait until last',
          completed: false
        }
      ]);
    });
};
