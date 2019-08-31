exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      name: 'Resource 1',
      desc: 'Resource Description 1'
    },
    {
      name: 'Resource 1',
      desc: 'Resource Description 1'
    },
    {
      name: 'Resource 1',
      desc: 'Resource Description 1'
    },
    {
      name: 'Resource 1',
      desc: 'Resource Description 1'
    }
  ])
}
