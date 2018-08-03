exports.seed = knex => knex('actions')
  .del()
  .then(() => knex('actions').insert([
    {
      id: 1,
      projectId: 1,
      name: 'Learn bootstrap',
      description: 'Go to the website and read all of it fast.',
      notes: 'I will need to figure out where the website is first.',
      completed: true,
    },
    {
      id: 2,
      projectId: 1,
      name: 'Compose website',
      description: 'Just reuse all their components mate.',
      notes: 'Wonderful, wonderful!',
      completed: false,
    },
    {
      id: 3,
      projectId: 1,
      name: 'Profit',
      description: 'I shall get what I have coming',
      notes: 'Wonderful, wonderful!',
      completed: false,
    },
    {
      id: 4,
      projectId: 2,
      name: 'Throw everything into a pile',
      description: 'There are lots of stuff, but if you throw it into a pile it will be easier',
      notes: 'Watch out for broken glass!',
      completed: false,
    },
    {
      id: 5,
      projectId: 2,
      name: 'Burn the pile to the ground',
      description: 'A suitable sacrifice to your pagan deity',
      notes: 'Make sure your fire permits have not expired',
      completed: false,
    },
    {
      id: 6,
      projectId: 3,
      name: 'Eat way too much ice cream',
      description: "You're soo bad!",
      notes: 'But no one is here to see you',
      completed: true,
    },
  ]));
  