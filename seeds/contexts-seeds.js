exports.seed = knex => knex('contexts')
  .del()
  .then(() => knex('contexts').insert([
    {
      id: 1,
      name: '@Home',
      description: '',
    },
    {
      id: 2,
      name: '@Work',
      description: '',
    },
    {
      id: 3,
      name: '@McDonalds',
      description: 'Use mobile app for discounts on sandwiches and coffee',
    },
  ]));