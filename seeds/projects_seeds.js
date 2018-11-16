exports.seed = knex => knex('projects')
  .del()
  .then(() => knex('projects').insert([
    {
      id: 1,
      name: 'Learn SQL',
      description: 'Be able to write good queries and such.',
      completed: false,
    },
    {
      id: 2,
      name: 'Clean bedroom',
      description: "Exterminators are coming. Don't want them to spray my stuff",
      completed: false,
    },
    {
      id: 3,
      name: 'Pack a bag for vacation',
      description: "Can't wear the same pair of underwear all week, dummy",
      completed: true,
    },
  ]));