exports.seed = knex =>
  knex('actions')
    .del()
    .then(() => {
      knex('actions').insert([
        {
          project_id: 1,
          description: 'Build Spotify analytics app',
          comments:
            'Come up with the design and name, figure out what functionality you want the app to have.'
        },
        {
          project_id: 2,
          description: 'Do the dishes',
          comments: 'Rinse off the dishes, then put them in the dishwasher.'
        }
      ]);
    });
