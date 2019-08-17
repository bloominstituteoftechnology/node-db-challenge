exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_name: 'Hardware store',
      description: 'Purchase supplies',
      notes: 'check for sales.',
      completed: 0,
      project: 1
    },
    {
      task_name: 'Craft store',
      description: 'Purchase acrylic paints ',
      notes: 'check for new color selection',
      completed: 1,
      project: 2
    },
    {
      task_name: 'Assemble',
      description: 'Put parts together.',
      notes: 'n/a',
      completed: 0,
      project: (1, 2)
    },
    {
      task_name: 'Sand',
      description: 'Smooth rough edges',
      notes: 'wear safety glasses',
      completed: 0,
      project: 1
    }
  ]);
};
