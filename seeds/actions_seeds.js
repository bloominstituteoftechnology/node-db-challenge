
exports.seed = knex => knex('actions')
.del()
.then(() => knex('actions').insert([
  {
    id: 1,
    projectId: 1,
    name: 'Study',
    description: 'Look it up online. Download an app.',
    notes: 'You can do this.',
    completed: true,
  },
  {
    id: 2,
    projectId: 1,
    name: 'Cry',
    description: 'A little self-doubt can lead to a little self-awareness',
    notes: 'Just make sure nobody sees',
    completed: false,
  },
  {
    id: 3,
    projectId: 1,
    name: 'Get a job after Lambda',
    description: 'Sweet victory',
    notes: 'Life is good',
    completed: false,
  },
  {
    id: 4,
    projectId: 2,
    name: 'Put clothes in closet',
    description: 'Take clothes out of trash bags and hang them up',
    notes: 'Some of it may not fit, so figure that out later',
    completed: false,
  },
  {
    id: 5,
    projectId: 2,
    name: 'Cry, again',
    description: 'You do not have enough room for your own clothing',
    notes: 'Have a box of tissues ready',
    completed: false,
  },
  {
    id: 6,
    projectId: 3,
    name: 'Get a bag',
    description: "Go steal one from your parent's place",
    notes: "They won't mind, really. They have about 50 of them",
    completed: true,
  },
]));