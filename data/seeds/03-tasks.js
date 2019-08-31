exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 1
    },
    {
      desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 1
    },
    {
      desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 2
    },
    {
      desc: 'Test Task 1 description',
      notes: 'Test Task Notes 1',
      completed: 1,
      proj_id: 3
    }
  ])
}
