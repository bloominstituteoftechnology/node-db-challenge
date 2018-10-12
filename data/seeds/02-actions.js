exports.seed = knex =>
  knex('actions')
    .truncate()
    .then(() => {
      knex('actions').insert([
        {
          project_id: 1,
          description: 'Build Spotify analytics app',
          notes:
            'Come up with the design and name, figure out what functionality you want the app to have.'
        },
        {
          project_id: 2,
          description: 'Do the dishes',
          notes: 'Rinse off the dishes, then put them in the dishwasher.'
        }
      ]);
    });
