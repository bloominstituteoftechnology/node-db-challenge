exports.seed = function(knex, Promise) {
  return knex('projects')
    .truncate()
    .then(function() {
      return knex('projects').insert([
        { name: 'Lambda', description: 'do stuff for lambda' },
        { name: 'Paint room', description: 'do stuff for painting room' },
        { name: 'Make dinner', description: 'gotta make that dinner' }
      ])
    })
}
