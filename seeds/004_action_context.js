
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action_context').del()
    .then(function () {
      // Inserts seed entries
      return knex('action_context').insert([
        { actionId: 1, contextId: 2 },
        { actionId: 2, contextId: 2 },
        { actionId: 3, contextId: 2 },
        { actionId: 4, contextId: 2 },
        { actionId: 5, contextId: 4 },
        { actionId: 6, contextId: 4 },
        { actionId: 7, contextId: 3 },
        { actionId: 7, contextId: 4 },
        { actionId: 7, contextId: 1 }
      ])
    })
}
