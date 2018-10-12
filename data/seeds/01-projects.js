exports.seed = knex =>
  knex('projects')
    .truncate()
    .then(() => {
      knex('projects').insert([
        {
          id: 1,
          name: 'Create React App',
          notes: 'Install CRA, Build app, Deploy app',
          complete: false
        },
        {
          id: 2,
          name: 'Clean the apartment!',
          notes: 'Do laundry, Do the dishes, Vacuum',
          complete: true
        }
      ]);
    });
