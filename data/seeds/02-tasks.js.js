
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_name: 'Trip to Lowes & Home Depot',
      description: 'Purchase supplies/tools',
      notes: 'Take list of supplies needed.',
      completed: 0,
      project_id: 1
    },
    {
      task_name: 'Go to lumber yard',
      description: 'Purchase wood',
      notes: 'Make sure to get a few extra pieces of wood',
      completed: 1,
      project_id: 2
    },
    {
      task_name: 'Assemble',
      description: 'Put parts together.',
      notes: 'Measure twice, cut once!',
      completed: 0,
      project_id: (1, 2)
    },
    {
      task_name: 'Sand',
      description: 'Smooth out all the rough edges',
      notes: 'Wear ear & eye protection',
      completed: 0,
      project_id: 1
    }
      ]);
};
