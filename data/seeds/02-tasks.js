exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_name: 'Go to hardware store',
      description: 'Purchase supplies',
      notes: 'check for sales.',
      completed: 0,
      project_id: 1
    },
    {
      task_name: 'Go to craft store',
      description: 'Purchase acrylic paints ',
      notes: 'check for new color selection',
      completed: 1,
      project_id: 2
    },
    {
      task_name: 'Assemble',
      description: 'Put parts together.',
      notes: 'n/a',
      completed: 0,
      project_id: (1, 2)
    },
    {
      task_name: 'Sand',
      description: 'Smooth rough edges',
      notes: 'wear safety glasses',
      completed: 0,
      project_id: 1
    }
  ]);
};
