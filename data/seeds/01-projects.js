exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Test Project 1',
      desc: 'Test Project description',
      completed: true
    },
    {
      name: 'Test Project 2',
      desc: 'Test Project description',
      completed: false
    },
    {
      name: 'Test Project 3',
      desc: 'Test Project description',
      completed: true
    },
    {
      name: 'Test Project 4',
      desc: 'Test Project description',
      completed: false
    }
  ])
}
