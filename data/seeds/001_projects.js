
exports.seed = function(knex, Promise) {
  return knex("projects")
  .truncate()
  .then(function () {
    return knex("projects").insert([
      { complete: true, name: 'sprint 1'},
      { complete: true, name: 'sprint 2'},
      { complete: false, name: 'sprint 3'},
    ])
  })
}
