exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    {
      name: 'Resource 1',
      desc: 'Resource Description 1'
    },
    {
      name: 'Resource 2',
      desc: 'Resource Description 2'
    },
    {
      name: 'Resource 3',
      desc: 'Resource Description 3'
    },
    {
      name: 'Resource 4',
      desc: 'Resource Description 4'
    }
  ])
}
