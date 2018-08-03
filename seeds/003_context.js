
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('context').del()
    .then(function () {
      // Inserts seed entries
      return knex('context').insert([
        { id: 1, context: 'home' },
        { id: 2, context: 'work' },
        { id: 3, context: 'office' },
        { id: 4, context: 'gym' }
      ])
    })
}
