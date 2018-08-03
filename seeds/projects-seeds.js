exports.seed = knex => knex('projects')
  .del()
  .then(() => knex('projects').insert([
    {
      id: 1,
      name: 'Build Havarti website',
      description: 'Create Havarti website for Rand Corporation.',
      completed: false,
    },
    {
      id: 2,
      name: 'Clean garage',
      description: 'Get out that stuff.',
      completed: false,
    },
    {
      id: 3,
      name: 'Self-medicate',
      description: 'Better escaping through science.',
      completed: true,
    },
  ]));
