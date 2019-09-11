
exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      task_name: 'The beginning of a new job',
      description: 'Purchase supplies/tools',
      notes: 'Take list of supplies needed.',
      completed: 0,
      project_id: 1
    },
    {
      task_name: 'Check list before leaving store',
      description: 'Purchase wood',
      notes: 'Make sure to get a few extra pieces of wood',
      completed: 1,
      project_id: 2
    },
    {
      task_name: 'Keep track of measurements',
      description: 'Assemble parts together.',
      notes: 'Measure twice, cut once!',
      completed: 0,
      project_id: (1, 2)
    },
    {
      task_name: 'Make sure you..',
      description: 'Smooth out all the rough edges',
      notes: 'Wear ear & eye protection',
      completed: 0,
      project_id: 1
    }
      ]);
};
