
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_description: 'Watch a Movie 1',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'Watch a Movie2',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 2
    },
    {
      task_description: 'Watch a Movie3',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 3
    },
    {
      task_description: 'Watch a Movie4',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 4
    },
    {
      task_description: 'Watch a Movie5',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 5
    },
    {
      task_description: 'Watch a Movie6',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 6
    },
    {
      task_description: 'Watch a Movie7',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 1
    },
    {
      task_description: 'Watch a Movie',
      task_notes: 'Binge Watch movie',
      completed: 0,
      project_id: 7
    },
  ])
};
