
exports.seed = function(knex, Promise) {
  return knex("contexts")
  .truncate()
  .then(function () {
    return knex("contexts").insert([
      { description: 'context 1' },
      { description: 'context 2' },
      { description: 'context 3' }
    ])
  })
}
