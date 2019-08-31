exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    {
      task_desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 1
    },
    {
      task_desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 1
    },
    {
      task_desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 2
    },
    {
      task_desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 3
    }
  ])
}
