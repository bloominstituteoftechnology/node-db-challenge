
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('action').del()
    .then(function () {
      // Inserts seed entries
      return knex('action').insert([
        { id: 1, projectId: 1, name: 'Setup RESTful API Server', description: 'Get express running', completed: false },
        { id: 2, projectId: 1, name: 'Setup knexjs database migrations', description: 'Get knexjs setup', completed: false },
        { id: 3, projectId: 1, name: 'Setup knexjs database seeds', description: 'Get knexjs setup', completed: false },
        { id: 4, projectId: 1, name: 'Setup api endpoints', description: 'Get endpoints setup', completed: false },
        { id: 5, projectId: 4, name: 'Run on the treadmill', description: 'Run fatboy run', completed: false },
        { id: 6, projectId: 4, name: 'Take yoga class', description: 'Remember to breath during difficult moments', completed: false },
        { id: 7, projectId: 4, name: 'Lift dumbells', description: 'Feel the burn', completed: false }
      ])
    })
}
