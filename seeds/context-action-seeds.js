exports.seed = knex => knex('actionContextMap')
  .del()
  .then(() => knex('actionContextMap').insert([
    {
      actionId: 1,
      contextId: 1,
    },
    {
      actionId: 1,
      contextId: 2,
    },
    {
      actionId: 2,
      contextId: 3,
    },
    {
      actionId: 4,
      contextId: 2,
    },
    {
      actionId: 4,
      contextId: 1,
    },
    {
      actionId: 5,
      contextId: 2,
    },
  ]));
  