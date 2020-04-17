exports.seed = function (knex) {
  return knex('projects')
    .truncate()
    .then(function () {
      return knex('projects').insert([
        {
          project_name: 'Build React App',
          project_description: 'Build a react app using React and React bootstrap.',
          project_completed: false,
        },
        {
          project_name: 'Build API',
          project_description: 'Build an API that returns winning lottery numbers. ',
          project_completed: false,
        },
        {
          project_name: 'CSS',
          project_description: 'Go back and go over CSS.',
          project_completed: false,
        },
      ]);
    });
};
