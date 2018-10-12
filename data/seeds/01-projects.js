exports.seed = knex =>
  knex('projects')
    .truncate()
    .then(() => {
      knex('projects').insert([
        {
          id: 1,
          name: 'Create React App',
          desciption: 'Install CRA, Build app, Deploy app',
          complete: false
        },
        {
          id: 2,
          name: 'Clean the apartment!',
          description: 'Do laundry, Do the dishes, Vacuum',
          complete: true
        }
      ]);
    });
