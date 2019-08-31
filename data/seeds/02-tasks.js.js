
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_name: 'Lowes & Home Depot',
      description: 'Purchase supplies/tools',
      notes: 'Take list of supplies needed.',
      completed: 0,
      project: 1
    },
    {
      task_name: 'Lumber yard',
      description: 'Purchase wood',
      notes: 'Make sure to get a few extra pieces of wood',
      completed: 1,
      project: 2
    },
    {
      task_name: 'Assemble',
      description: 'Put parts together.',
      notes: 'Measure twice, cut once!',
      completed: 0,
      project: (1, 2)
    },
    {
      task_name: 'Sand',
      description: 'Smooth out all the rough edges',
      notes: 'Wear ear & eye protection',
      completed: 0,
      project: 1
    }
      ]);
};
