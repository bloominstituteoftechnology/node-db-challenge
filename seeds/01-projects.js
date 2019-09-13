exports.seed = function(knex) {
  return knex('projects').insert([
    {
      id: 1,
      name: 'Databases',
      description: 'Databases description',
      completed: false,
    },
    {
      id: 2,
      name: 'Node',
      description: 'Node description',
      completed: false,
    },
    {
      id: 3,
      name: 'SQL',
      description: 'SQL description',
      completed: false,
    },
    {
      id: 4,
      name: 'React',
      description: 'React description',
      completed: true,
    },
  ]);
};