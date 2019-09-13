exports.seed = function(knex) {
  return knex('tasks').insert([
    {
      id: 1,
      project_id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 2,
      project_id: 2,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 3,
      project_id: 2,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 4,
      project_id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 5,
      project_id: 2,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 6,
      project_id: 4,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 7,
      project_id: 3,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
    {
      id: 8,
      project_id: 4,
      description: 'task description',
      notes: 'task notes',
      completed: false,
    },
    {
      id: 9,
      project_id: 1,
      description: 'task description',
      notes: 'the task notes',
      completed: false,
    },
  ]);
};